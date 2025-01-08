import sgMail from '@sendgrid/mail'
import { SendGridInput } from '../domain/email'

export class SendGridProvider {
  async sendEmail(emailConfig: SendGridInput): Promise<void> {
    sgMail.setApiKey('SENDGRID_API_KEY')
 
    return sgMail.send({
      to: emailConfig.to,
      from: 'email@sender.com',
      subject: 'Email subject',
      text: 'Email content',
      html: 'Email content',
    })
    .then(data => {
      console.log('Email sent', { messageId: data[0].headers['x-message-id'] })
    })
    .catch (error => {
      console.error('Email sent failed', { error: error.message })
    })
    .finally(() => console.log('END'))
  }
}
