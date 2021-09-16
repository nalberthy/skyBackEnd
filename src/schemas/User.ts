import { Schema, model, Document } from 'mongoose'
import bcript from 'bcrypt'

interface UserInterface extends Document {
  firstName?: String,
  email?: String,
  password?: String,
  phone?: Array<object>
}

const UserSchema = new Schema({
  firstName: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  phone: { type: Array }
}, {
  timestamps: true
})

UserSchema.pre('save', async function (next) {
  const hash = await bcript.hash(this.password, 10)
  this.password = hash
  next()
})

export default model<UserInterface>('User', UserSchema)
