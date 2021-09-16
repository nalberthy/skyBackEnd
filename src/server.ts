import { SetupApplication } from './app'

class Server {
  static start (): void {
    const PORT: any = process.env.PORT
    const application = new SetupApplication(PORT)
    application.start()
  }
}

Server.start()
