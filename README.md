# 🔐 Backend with JWT Authentication API

A **production-style Node.js authentication API** built using **Express.js, MongoDB, and JWT**.
This project demonstrates how to implement **secure user authentication, protected routes, and role-based access control (RBAC)** using a clean **MVC architecture**.

This backend was built as part of backend learning to understand **real-world authentication systems used in modern web applications.**

---

# 🚀 Features

* User Registration
* User Login
* JWT Token Authentication
* Password Hashing with bcrypt
* Protected Routes Middleware
* Role-Based Access Control (Admin / User)
* MongoDB Database Integration
* Environment Variables Configuration
* Clean MVC Folder Structure
* Centralized Error Handling

---

# 🧰 Tech Stack

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB
* Mongoose

**Authentication**

* JSON Web Token (JWT)
* bcryptjs

**Other Tools**

* dotenv
* cors
* nodemon

---

# 📁 Project Structure

```
Backend-with-JWT-Authentication-API
│
├── config
│   └── db.js                # MongoDB connection
│
├── controllers
│   └── authController.js   # Business logic
│
├── middleware
│   ├── authMiddleware.js   # JWT verification
│   └── errorMiddleware.js  # Global error handler
│
├── models
│   └── User.js             # User schema
│
├── routes
│   └── authRoutes.js       # Authentication routes
│
├── server.js               # Application entry point
├── package.json
├── .env
└── README.md
```

---

# ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/webdevMitesh/Backend-with-JWT-Authentication-API.git
```

---

### 2️⃣ Navigate to project folder

```bash
cd Backend-with-JWT-Authentication-API
```

---

### 3️⃣ Install dependencies

```bash
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file in the root directory.

Example:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/backendlearning
JWT_SECRET=your_secret_key
```

---

# ▶️ Running the Server

Run development server:

```bash
npm run dev
```

Server will run at:

```
http://localhost:5000
```

---

# 📡 API Endpoints

## Register User

```
POST /api/auth/register
```

Request Body:

```json
{
  "name": "Mitesh",
  "email": "mitesh@test.com",
  "password": "123456",
  "role": "admin"
}
```

---

## Login User

```
POST /api/auth/login
```

Request Body:

```json
{
  "email": "mitesh@test.com",
  "password": "123456"
}
```

Response Example:

```json
{
  "success": true,
  "token": "JWT_TOKEN",
  "user": {
    "name": "Mitesh",
    "email": "mitesh@test.com",
    "role": "admin"
  }
}
```

---

## Get User Profile (Protected Route)

```
GET /api/auth/profile
```

Headers:

```
Authorization: Bearer TOKEN
```

---

## Admin Route (Role Protected)

```
GET /api/auth/admin
```

Accessible only by users with **admin role**.

---

# 🔐 Authentication Flow

1️⃣ User registers or logs in
2️⃣ Server generates a **JWT token**
3️⃣ Client stores the token
4️⃣ Token is sent in **Authorization Header**
5️⃣ Middleware verifies token
6️⃣ Access granted to protected routes

---

# 🧠 Concepts Covered

* REST API Development
* Express Middleware
* JWT Authentication
* Password Hashing
* Role-Based Authorization (RBAC)
* MVC Architecture
* Environment Configuration

---

# 👨‍💻 Author

**Mitesh Nadiyapara**

MERN Stack Developer

GitHub:
https://github.com/webdevMitesh

---
