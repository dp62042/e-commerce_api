import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

const uri = process.env.MONGODB_URL

const main = async () => {
  try {
    await mongoose.connect(uri)
  } catch (error) {
    console.log(error)
  }
}

export default main
