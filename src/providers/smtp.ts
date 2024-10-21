import { createTransport } from 'nodemailer'
import type SMTPTransport from 'nodemailer/lib/smtp-transport'
import { SmtpInput, SmtpPort } from '../domain/email'

export class SmtpProvider {
  async sendEmail(emailConfig: SmtpInput): Promise<void> {
    const { to, host, port, username, password } = emailConfig

    const transporter = createTransport({
      secure: port === SmtpPort.SMTPS,
      host,
      port: port,
      auth: {
        user: username,
        pass: password,
      },
      connectionTimeout: 10000, //10seg
      greetingTimeout: 30000, //30seg
    })

    return transporter
      .sendMail({
        from: 'email@sender.com',
        to,
        subject: 'Email subject',
        html: 'Email content',
      })
      .then((data: SMTPTransport.SentMessageInfo) => {
        console.log('Email sent', { messageId: data.messageId })
      })
      .catch(error => {
        if ('response' in error) {
          console.log('Email sent failed', { error: error.message })
        }
        return Promise.reject(error)
      })
      .finally(() => console.log('END'))
  }
}