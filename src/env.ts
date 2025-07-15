import { z } from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string().url().startsWith('postgresql://'),
  GEMINI_API_KEY: z.string(),
})

export const env = envSchema.parse(process.env)

/*Scrip para fazer valição e parse das variaveis ambiente, para garantir que a aplicação não
execute caso falte alguma variavel de ambiente obrigatória, nesse caso é setado um valor default para caso a variavel não exista*/
