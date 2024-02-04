import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  if (process.env.DEV) {
    app.enableCors({
      origin: process.env.FRONTEND_URL ?? 'http://127.0.0.1:4200',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: false,
    })
  }

  const port = process.env.PORT ?? 3000
  await app.listen(port)
  Logger.log(`🚀 Application is running on: http://localhost:${port}/`)
}

bootstrap()
