import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import main from './config/db.js'
import router from './routers/products.router.js'
import { errorHandler } from './middlewares/errorMiddleware.js'
import router2 from './routers/users.router.js'
// Body parser
app.use(express.json())

main()
  .then(() => {
    console.log('DB connected Successfully!')
  })
  .catch((err) => {
    console.error('Failed to connect to DB')
  })

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
