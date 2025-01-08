import { z } from 'zod'

const sesEmailConfigSchema = z.object({
  to: z.string().email(),
})

const smtpEmailConfigSchema = z.object({
  host: z.string(),
  port: z.number(),
  username: z.string(),
  password: z.string(),
  to: z.string().email(),
})

const sendGridEmailConfigSchema = z.object({
  to: z.string().email(),
})

export const sendEmailSchema = z.discriminatedUnion('provider', [
  z.object({ provider: z.literal('ses'), emailConfig: sesEmailConfigSchema }),
  z.object({
    provider: z.literal('smtp'),
    emailConfig: smtpEmailConfigSchema,
  }),
  z.object({ provider: z.literal('sendgrid'), emailConfig: sendGridEmailConfigSchema }),
])
