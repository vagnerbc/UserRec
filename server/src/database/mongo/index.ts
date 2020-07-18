import mongoose from 'mongoose'

export default class MongoDB {
  static connect () {
    return mongoose.connect('mongodb://0.0.0.0:27017/userrec', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }
}
