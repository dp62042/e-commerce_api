import Product from '../models/products.model.js'

// get all products with pagination, filter, sort (GET)

export const getAllProducts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Optional filters
<<<<<<< HEAD
    const category = req.query.category ? { category: req.query.category } : {}
    const isFeatured =
      req.query.isFeatured === 'true' ? { isFeatured: true } : {}

    const sortBy = req.query.sort || 'createdAt'
    const order = req.query.order === 'asc' ? 1 : -1

    const filter = {
      ...category,
      ...isFeatured,
    }

    const total = await Product.countDocuments(filter)
=======
    const category = req.query.category ? { category: req.query.category } : {};
    const isFeatured =
      req.query.isFeatured === 'true'
        ? { isFeatured: true }
        : {};

    const sortBy = req.query.sort || 'createdAt';
    const order = req.query.order === 'asc' ? 1 : -1;

    const filter = {
      ...category,
      ...isFeatured,
    };

    const total = await Product.countDocuments(filter);
>>>>>>> 0cdbe5cec83ef71f7823bd7d412893f7a40c54d1

    const products = await Product.find(filter)
      .sort({ [sortBy]: order })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      total,
      page,
      pages: Math.ceil(total / limit),
      count: products.length,
      products,
    });
  } catch (error) {
    next(error);
  }
};


// Get single product by ID  (GET:ID)

export const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }
    res.status(200).json(product)
  } catch (error) {
    next(error)
  }
}

//  Create new product (Admin)   (POST)
export const createProduct = async (req, res, next) => {
  try {
    const product = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      stock: req.body.stock,
      category: req.body.category,
      brand: req.body.brand,
      images: req.body.images,
    })
    const createProduct = await product.save()
    res.status(201).json(createProduct)
  } catch (error) {
    next(error)
  }
}

//  Update product (Admin)   (PUT)
export const updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    product.name = req.body.name || product.name
    product.description = req.body.description || product.description
    product.price = req.body.price || product.price
    product.stock = req.body.stock || product.stock
    product.category = req.body.category || product.category
    product.brand = req.body.brand || product.brand
    product.images = req.body.images || product.images

    const updateProduct = await product.save()
    res.status(200).json(updateProduct)
  } catch (error) {
    next(error)
  }
}

// Delete product (Admin)  (DELETE)
export const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    await product.deleteOne()

    res.status(200).json({ message: 'Product removed' })
  } catch (error) {
    next(error)
  }
}
