import * as dotenv from 'dotenv';

dotenv.config();

export const API_PREFIX = process.env.API_PREFIX;
export const JWT_SECRET = process.env.JWT_SECRET;
