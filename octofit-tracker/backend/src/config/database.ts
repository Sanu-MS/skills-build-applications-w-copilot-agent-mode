import mongoose from 'mongoose'

const defaultMongoUri = 'mongodb://127.0.0.1:27017/octofit_db'

export async function connectDatabase() {
  const mongoUri = process.env.MONGODB_URI ?? defaultMongoUri

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection
  }

  await mongoose.connect(mongoUri)

  return mongoose.connection
}