# e-commerce_api
Node.js + Express + MongoDB E-commerce RESTful API.




# E-commerce REST API

A simple RESTful E-commerce backend built with **Node.js**, **Express**, **MongoDB**, and **Mongoose**.

## 🚀 Features

- User registration & login with JWT authentication
- Role-based access (admin & customer)
- CRUD operations for products
- Product reviews & ratings
- Pagination & filtering for products
- Secure routes using middlewares
- Environment variables with `.env`
- Ready for deployment (Render, Railway, or any Node host)

## 🗂️ Project Structure

```

/controllers    → API route logic (products, users)
/models         → Mongoose schemas (User, Product)
/routes         → API endpoints
/middlewares    → Auth & error handling
/utils          → Helper functions (e.g., token generation)
server.js       → Entry point
.env.example    → Sample environment config

````

## ⚙️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **JWT**
- **bcrypt**

## 🔑 Setup

1️⃣ Clone the repo  
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
````

2️⃣ Install dependencies

```bash
npm install
```

3️⃣ Add your `.env`

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret
NODE_ENV=development
PORT=5000
```

4️⃣ Start server

```bash
npm run dev
```

## 🌍 Deployment

* Ready for deployment on **Render**, **Railway**, or **Heroku**
* Use a free MongoDB Atlas cluster

---

## 📬 API Endpoints Example

| Method | Endpoint              | Description                        |
| ------ | --------------------- | ---------------------------------- |
| POST   | `/api/users/register` | Register a new user                |
| POST   | `/api/users/login`    | Login & get JWT token              |
| GET    | `/api/products`       | Get all products (with pagination) |
| POST   | `/api/products`       | Add a product (admin only)         |
| PUT    | `/api/products/:id`   | Update a product (admin only)      |
| DELETE | `/api/products/:id`   | Delete a product (admin only)      |

---

## 📝 License

Free to use for learning & practice.

```

---

## ✅ ✅ **One-liner Repo Description (for GitHub repo page)**

> `A Node.js + Express + MongoDB RESTful API for a simple e-commerce backend with JWT auth, admin access, and CRUD products.`


