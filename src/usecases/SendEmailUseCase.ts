import { EmailProvider, EmailService, SesInput, SmtpInput } from '../domain/email'
import { SendGridProvider } from '../providers/sendgrid'
import { SESProvider } from '../providers/ses'
import { SmtpProvider } from '../providers/smtp'

export class SendEmailUsecase {
  async execute(provider: EmailProvider, emailConfig: SmtpInput | SesInput): Promise<void> {
    const emailProviders: Record<EmailProvider, EmailService> = {
      ses: new SESProvider(),
      smtp: new SmtpProvider(),
      sendgrid: new SendGridProvider(),
    }

    const emailProvider = emailProviders[provider]
    
    if (!emailProvider) {
      throw new Error('Invalid email provider')
    }

    return emailProvider.sendEmail(emailConfig)
  }
}
