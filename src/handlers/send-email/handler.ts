'use strict'
import { SendEmailUsecase } from '../../usecases/SendEmailUseCase'

module.exports.sendEmail = async (event: any) => {
  const body = JSON.parse(event.body)
  const { provider, emailConfig } = body

  const sendEmailUsecase = new SendEmailUsecase()
  const result = sendEmailUsecase.execute(provider, emailConfig)

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  }
}
