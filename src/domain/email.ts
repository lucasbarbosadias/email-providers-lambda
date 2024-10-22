export enum EmailProvider {
  SES = 'ses',
  SMTP = 'smtp',
}

export interface EmailService {
  sendEmail(emailConfig: SmtpInput | SesInput): Promise<void>
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
