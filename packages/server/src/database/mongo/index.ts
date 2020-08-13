import mongoose from 'mongoose'

export default class MongoDB {
  private static readonly host : string  = process.env.MONGO_HOST;
  private static readonly port : string  = process.env.MONGO_PORT;
  private static readonly dbName : string  = process.env.MONGO_NAME;
  private static readonly user : string  = process.env.MONGO_USER;
  private static readonly pass : string  = process.env.MONGO_PASSWORD;

  static connect () {
    return mongoose.connect(`mongodb://${MongoDB.host}:${MongoDB.port}/${MongoDB.dbName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }
}
