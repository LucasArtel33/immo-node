require('dotenv').config(); 
module.exports = {
  "development": {
    "username": process.env.DB_DEV_USER,
    "password": process.env.DB_DEV_PASSWORD,
    "database": process.env.DB_DEV_DATABASE,
    "host": process.env.DB_DEV_HOST,
    "dialect": process.env.DB_DIALECT,
    "port":process.env.DB_DEV_PORT
  },
  "test": {
    "username": process.env.DB_DEV_USER,
    "password": process.env.DB_DEV_PASSWORD,
    "database": process.env.DB_TEST_DATABASE,
    "host": process.env.DB_DEV_HOST,
    "dialect": process.env.DB_DIALECT,
    "port":process.env.DB_DEV_PORT
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
