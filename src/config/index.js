import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  CAMARA_API_URL: z.string().url().default('https://dadosabertos.camara.leg.br/api/v2'),
});

export const config = envSchema.parse(process.env);