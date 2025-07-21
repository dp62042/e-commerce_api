// routes/userRoutes.js
import express from 'express'
import { registerUser, loginUser } from '../controllers/users.controller.js'

const router2 = express.Router()

router2.post('/register', registerUser)
router2.post('/login', loginUser)

export default router2
