import { v4 as uuid } from 'uuid';
import { BadRequestException } from '@nestjs/common';

const validExtensions = ['jpeg', 'png', 'jpg'];

export const getFileName = (req: Request, file, callback) => {
  const id = uuid();

  const [type, fileExtName] = file.mimetype.split('/');
  console.log('Type: ', type);

  if (type !== 'image') {
    callback(new BadRequestException('Only images can be uploaded'));
    return;
  }

  if (!validExtensions.includes(fileExtName)) {
    callback(
      new BadRequestException(
        'Invalid Extension - Supported Extensions: ' +
          validExtensions.join(','),
      ),
    );
    return;
  }

  const fileName = `${id}.${fileExtName}`;

  callback(null, fileName);
};
