import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url({
    message: 'NEXT_PUBLIC_API_URL must be a valid URL',
  }),
});

// This will throw an error if validation fails
const validateEnv = () => {
  const parsed = envSchema.safeParse({
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  });

  if (!parsed.success) {
    console.error('❌ Invalid environment variables:', JSON.stringify(parsed.error.format(), null, 2));
    throw new Error('Invalid environment variables');
  }

  return parsed.data;
};

export const env = validateEnv();
