export class SendEmailUsecase {
  execute(provider: string, emailConfig: object): string {
    const emailProviders: any = {
      ses: 'SES',
      nodemailer: 'Nodemailer',
      sendgrid: 'Sendgrid',
    }

    const emailProvider = emailProviders[provider]
    
    if (!emailProvider) {
      throw new Error('Invalid email provider')
    }

    return emailProvider
  }
}
