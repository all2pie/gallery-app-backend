import {
  Catch,
  ArgumentsHost,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Logger } from '@nestjs/common';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  catch(exception, host: ArgumentsHost) {
    Logger.error(exception, null, `Global Error Handler`);

    if (exception.name) {
      if (exception.name === 'EntityNotFound') {
        const moduleName = exception.message.split('"')[1];
        const notFoundException = new NotFoundException(
          `${moduleName} not found`,
        );
        exception = notFoundException;
      } else if (exception.name === 'QueryFailedError') {
        if (exception.code === '23505') {
          const badRequest = new BadRequestException(
            'Duplicate Data Error',
            exception.detail,
          );
          return badRequest;
        } else if (exception.code === '23503') {
          const msg = exception.query.includes('DELETE')
            ? `Can't delete - In Use`
            : 'Relation not valid';
          const badRequest = new BadRequestException(
            msg,
            exception.detail.split('in')[0],
          );
          exception = badRequest;
        }
      }
    }

    super.catch(exception, host);
  }
}
