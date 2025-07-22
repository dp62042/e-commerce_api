import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
const app = express()
import main from './config/db.js'
import router from './routers/products.router.js'
import { errorHandler } from './middlewares/errorMiddleware.js'
import router2 from './routers/users.router.js'
// Body parser
app.use(express.json())
app.use(
  cors({
    origin: '*', // Allow ALL (for dev)
  })
)

main()
  .then(() => {
    console.log('DB connected Successfully!')
  })
  .catch((err) => {
    console.error('Failed to connect to DB')
  })
app.get('/', (req, res) => {
<<<<<<< HEAD
  res.send('API is running 🚀')
})
=======
  res.send('API is running 🚀');
});
>>>>>>> 0cdbe5cec83ef71f7823bd7d412893f7a40c54d1
// user routes
app.use('/api/v1/users', router2)
// product routes
app.use('/api/v1/products', router)

// Error handler middleware LAST
app.use(errorHandler)

const port = process.env.PORT || 5500

app.listen(port, () => {
  console.log(`server is live on http://localhost:${port}`)
})
