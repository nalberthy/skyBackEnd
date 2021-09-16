import express from 'express'
import { Server } from 'http'
import router from './routes'
import cors from 'cors'
import mongoose from 'mongoose'

class SetupApplication {
  private server?: Server;
  private portServer:number;
  constructor (private port = 3000, public app = express()) {
    this.portServer = this.port
    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.app.use(express.json())
    this.app.use(cors())
  }

  private database (): void {
    mongoose.connect('mongodb+srv://root:ylYf5cyR94VvUpH1@cluster0.1qzlq.mongodb.net/sky?retryWrites=true&w=majority',
      {
        useNewUrlParser: true
      })
  }

  private routes (): void {
    this.app.use(router)
  }

  public start (): void {
    this.server = this.app.listen(this.portServer, () => {
      console.log(`Server running on port ${this.portServer}`)
    })
  }
}

export { SetupApplication }
