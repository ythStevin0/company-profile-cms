import dotenv from 'dotenv';

dotenv.config();

const requireEnv = (name) => {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(
      `Missing environment variable ${name}. Copy backend/.env.example to backend/.env and fill it in.`
    );
  }

  return value;
};

export const env = {
  PORT: Number(process.env.PORT) || 5000,
  MONGO_URI: requireEnv('MONGO_URI'),
  JWT_SECRET: requireEnv('JWT_SECRET'),
};
