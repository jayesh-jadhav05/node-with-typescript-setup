import dotenv from 'dotenv';
dotenv.config();

interface IConfig {
  PORT: number;
  MONGO_URI: string;
  NODE_ENV: string;
}

export const config: IConfig = {
  PORT: parseInt(process.env.PORT as string) ?? 5000,
  MONGO_URI: process.env.MONGO_URI || '',
  NODE_ENV: process.env.NODE_ENV || 'local',
};
