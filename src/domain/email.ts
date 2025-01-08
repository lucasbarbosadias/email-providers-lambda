export enum EmailProvider {
  SES = 'ses',
  SMTP = 'smtp',
  SENDGRID = 'sendgrid',
}

export interface EmailService {
  sendEmail(emailConfig: SmtpInput | SesInput | SendGridInput): Promise<void>
}

export interface SesInput {
  to: string
}

export interface SmtpInput {
  to: string
  host: string
  port: number
  username: string
  password: string
}

export interface SendGridInput {
  to: string
}
