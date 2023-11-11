import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import session from 'express-session'
import passport from 'passport'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

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

  app.use(passport.initialize())
  app.use(passport.session())
  const port = process.env.PORT
  await app.listen(port)
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/` //${globalPrefix}
  )
}

bootstrap()
