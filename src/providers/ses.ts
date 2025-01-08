import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'
import { SesInput } from '../domain/email'

const sesClient = new SESClient()

export class SESProvider {
  async sendEmail(emailConfig: SesInput): Promise<void> {

    return sesClient
      .send(
        new SendEmailCommand({
          Destination: {
            CcAddresses: [],
            ToAddresses: [emailConfig.to],
          },
          Message: {
            Body: {
              Html: {
                Charset: 'UTF-8',
                Data: 'Email content'
              },
              Text: {
                Charset: 'UTF-8',
                Data: 'Email content'
              },
            },
            Subject: {
              Charset: 'UTF-8',
              Data: 'Email subject'
            },
          },
          Source: 'email@sender.com'
        }),
      )
      .then(data => {
        console.log('Email sent', { messageId: data.MessageId })
      })
      .catch (error => {
        console.error('Email sent failed', { error: error.message })
      })
      .finally(() => console.log('END'))
  }
}
