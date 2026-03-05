# 🔐 Backend with JWT Authentication API

A **production-style Node.js authentication API** built using **Express.js, MongoDB, and JWT**.
This project demonstrates how to implement **secure user authentication, protected routes, and role-based access control (RBAC)** using a clean **MVC architecture**.

This backend project was built as part of backend learning to understand **real-world authentication systems used in modern web applications**.

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
* Centralized Error Handling
* Clean MVC Folder Structure

---

# 🧰 Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JSON Web Token (JWT)
* bcryptjs

### Other Tools

* dotenv
* cors
* nodemon

---

# 📁 Project Structure

```
Backend-with-JWT-Authentication-API
│
├── config
│   └── db.js
│
├── controllers
│   └── authController.js
│
├── middleware
│   ├── authMiddleware.js
│   └── errorMiddleware.js
│
├── models
│   └── User.js
│
├── routes
│   └── authRoutes.js
│
├── server.js
├── package.json
├── .env
└── README.md
```

---

# ⚙️ Installation

Clone the repository

```
git clone https://github.com/webdevMitesh/Backend-with-JWT-Authentication-API.git
```

Go to project folder

```
cd Backend-with-JWT-Authentication-API
```

Install dependencies

```
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

Run development server

```
npm run dev
```

Server will run on

```
http://localhost:5000
```

---

# 📡 API Endpoints

### Register User

```
POST /api/auth/register
```

Example Request

```json
{
  "name": "Mitesh",
  "email": "mitesh@test.com",
  "password": "123456",
  "role": "admin"
}
```

---

### Login User

```
POST /api/auth/login
```

Example Request

```json
{
  "email": "mitesh@test.com",
  "password": "123456"
}
```

Example Response

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

### Get User Profile (Protected Route)

```
GET /api/auth/profile
```

Header

```
Authorization: Bearer TOKEN
```

---

### Admin Route (Role Protected)

```
GET /api/auth/admin
```

Accessible only by users with **admin role**.

---

# 🔐 Authentication Flow

1. User registers or logs in
2. Server generates a **JWT token**
3. Client stores the token
4. Token is sent in **Authorization header**
5. Middleware verifies token
6. Access granted to protected routes

---

# 🧠 Concepts Covered

* REST API Development
* Express Middleware
* JWT Authentication
* Password Hashing
* Role-Based Authorization (RBAC)
* MVC Architecture
* Environment Variables

---

# 👨‍💻 Author

**Mitesh Nadiyapara**

MERN Stack Developer

GitHub
https://github.com/webdevMitesh

---
