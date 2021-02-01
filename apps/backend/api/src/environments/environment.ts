export const environment = {
  production: false,
  connection: {
    type: 'postgres' as 'aurora-data-api',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: '123456',
    database: 'svs',
    synchronize: true
  }
};
