import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import session from 'express-session'
import passport from 'passport'
import cookieParser from 'cookie-parser'
import * as dotenv from 'dotenv'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  dotenv.config()
  app.enableCors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
  app.use(
    session({
      secret: process.env.COOKIE_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 3600000 * 24,
      },
    })
  )
  app.use(cookieParser())

  app.use(passport.initialize())

  app.use(passport.session())

  await app.listen(process.env.BACKEND_PORT)
  Logger.log(`🚀 Application is running on: ${process.env.BACKEND_URL}`)
}

bootstrap()
