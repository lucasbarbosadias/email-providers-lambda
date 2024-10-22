import nodemailer from 'nodemailer'
import type SMTPTransport from 'nodemailer/lib/smtp-transport'
import { SmtpInput } from '../domain/email'

export class SmtpProvider {
  async sendEmail(emailConfig: SmtpInput): Promise<void> {
    const { to, host, port, username, password } = emailConfig

    const transporter = nodemailer.createTransport({
      host,
      port,
      auth: {
        user: username,
        pass: password,
      }
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
