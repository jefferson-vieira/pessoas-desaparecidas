import { z } from 'zod';

const envSchema = z.object({
  API_URL: z.string().url(),
});

type Env = z.infer<typeof envSchema>;

export const env: Env = envSchema.parse(process.env);
