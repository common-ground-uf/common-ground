
import { config } from 'dotenv';
config();
export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { NODE_ENV, PORT, MONGODB_URI } = process.env;