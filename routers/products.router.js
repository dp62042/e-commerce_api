import express from 'express'

import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/products.controller.js'

import { protect, admin } from '../middlewares/authMiddleware.js'

const router = express.Router()

// Public
router.get('/', getAllProducts)
router.get('/:id', getProductById)

// Admin (should protect these with auth middleware)
router.post('/', protect, admin, createProduct)
router.put('/:id', protect, admin, updateProduct)
router.delete('/:id', protect, admin, deleteProduct)

export default router
