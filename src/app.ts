import express from 'express'
import { Server } from 'http'
import router from './routes'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

class SetupApplication {
  private server?: Server
  constructor (private port = process.env.PORT || 3000, public app = express()) {
    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.app.use(express.json())
    this.app.use(cors())
  }

  private database (): void {
    const mongoURI:any = process.env.MONGO_URI
    mongoose.connect(mongoURI, {}, () => console.log('Connected to database'))
  }

  private routes (): void {
    this.app.use(router)
  }

  public start (): void {
    this.server = this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`)
    })
  }
}

export { SetupApplication }
