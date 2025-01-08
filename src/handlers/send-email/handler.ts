'use strict'
import { z } from 'zod'
import { sendEmailSchema } from './schema'
import { SendEmailUsecase } from '../../usecases/SendEmailUseCase'
import { EmailProvider } from '../../domain/email'

module.exports.sendEmail = async (event: any) => {
  try {
    const body = JSON.parse(event.body)
    const validatedData = sendEmailSchema.parse(body)

    const { provider, emailConfig } = validatedData

    const sendEmailUsecase = new SendEmailUsecase()
    await sendEmailUsecase.execute((provider as EmailProvider), emailConfig)

    return {
      statusCode: 200,
      body: JSON.stringify({ status: 'ok' }),
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: 'Invalid input',
          errors: error.errors,
        }),
      }
    }

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    }
  }
}
