export default () => ({
  general: {
    port: parseInt(process.env.PORT, 10) || 3011,
    host: process.env.HOST || '0.0.0.0',
    hostname: process.env.SERVERNAME || 'http://localhost:3011',
    prod: process.env.NODE_ENV || false,
  },
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5301,
    username: process.env.DB_USER || 'admin',
    password: process.env.DB_PASS || 'randomDbPass :)',
    database: process.env.DB || 'art',
  },
});
