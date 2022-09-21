import * as dotenv from 'dotenv';

// Load env file
dotenv.config();

export const jwtConstants = {
  secret: process.env.JWT_SECRET,
};
