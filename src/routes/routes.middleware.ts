import Jwt from 'jsonwebtoken'
import { secret } from '../config/auth.json'
/**
 * Class of principal middlewares
 */
export default class Middleware {
  checkAuthToken = (req: any, res: any, next: any): void => {
    const authorization = req.headers.authorization

    if (authorization) {
      const bearer = authorization.split(' ')

      if (bearer.length !== 2) {
        res.status(401).send({ message: 'Token is missing' })
      }

      const [scheme, token] = bearer

      if (!/^Bearer$/i.test(scheme)) {
        res.status(401).send({ message: 'Token malformatted' })
      }
      Jwt.verify(token, secret, (err:any, decoded:any) => {
        if (err) {
          res.status(401).send({ message: this.verifyError(err) })
        }
        req.userId = decoded?.id
        next()
      })
    }
  }

  verifyError = (error:any) => {
    const messageError:any = {
      'jwt expired': 'Session expired',
      'invalid signature': 'Unauthorized'
    }
    if (messageError[error.message]) {
      return messageError[error.message]
    }
    return 'No token valid provided'
  }
}
