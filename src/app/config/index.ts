import dotenv from 'dotenv';
import path from 'path';
dotenv.config({path:path.join(process.cwd(),".env")});
// require('dotenv').config({ path: '/custom/path/to/.env' })

export default {
  PORT: process.env.PORT,
  DB_URL: process.env.DATABASE_URL,
  bcrypt_salt: process.env.BCRYPT_SALT
};