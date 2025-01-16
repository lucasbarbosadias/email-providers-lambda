# 📂 Email Providers Lambda

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%233178C6.svg?style=for-the-badge&logo=typescript&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

This project demonstrates a serverless application built with TypeScript and Node.js, designed to send emails using different email providers. The email provider is selected dynamically based on the input provided to the Lambda function. The supported providers include:

- AWS SES
- SMTP Provider (custom)
- SendGrid

Each provider has an example implementation included in the code.

## 🛠️ Features

- **Dynamic Email Provider Selection:** Choose the email provider at runtime.
- **Modular Design:** Easily add or extend providers.
- **Scalability:** Deployed as an AWS Lambda function to leverage serverless architecture.
- **TypeScript:** Ensures type safety and better development experience.

## 🖥️ cURL Examples
You can test the email sending functionality locally using the following cURL commands. Replace the placeholder values (e.g., `username`, `password`, `to@example.com`) with your actual credentials and recipient information.

### SMTP Provider

```bash
curl --location 'http://localhost:3000/dev/email' \
--header 'Content-Type: application/json' \
--data-raw '{
    "provider": "smtp",
    "emailConfig": {
        "host": "sandbox.smtp.mailtrap.io",
        "port": 2525,
        "username": "username",
        "password": "password",
        "to": "to@example.com"
    }
}'
```
### AWS SES Provider

```bash
curl --location 'http://localhost:3000/dev/email' \
--header 'Content-Type: application/json' \
--data-raw '{
    "provider": "ses",
    "emailConfig": {
        "to": "to@example.com"
    }
}'
```

### SendGrid Provider

```bash
curl --location 'http://localhost:3000/dev/email' \
--header 'Content-Type: application/json' \
--data-raw '{
    "provider": "sendgrid",
    "emailConfig": {
        "to": "to@example.com"
    }
}'
```

## 🚀 Result

After sending a request, the email should arrive at the recipient's inbox. Below is an example of the email received:

![image](https://github.com/user-attachments/assets/6341ff27-74e2-4052-8958-ba00e118905c)
