
<!-- PROJECT TITLE -->
<h1 align="center">📚 Library Management System API</h1>

---

## 🧭 Table of Contents

- [About The Project](#about-the-project)  
- [Built With](#built-with)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
- [Usage](#usage)  
  - [Book Endpoints](#book-endpoints)  
  - [Borrow Endpoints](#borrow-endpoints)  
- [Project Structure](#project-structure)  
- [Author](#author)  
- [License](#license)  
- [Contact](#contact)  

---

## 🏗️ About The Project

A RESTful backend API for managing a library:
- **Book management**: create, retrieve, update, delete, and filter books.
- **Borrowing logic**: borrow books with real-time availability and copy-tracking.
- **Aggregation summary**: lists total borrowed copies per book.
- Fully typed with **TypeScript**, built on **Express**, and uses **MongoDB + Mongoose**.

---

## 🛠️ Built With

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- [ts-node-dev](https://github.com/wclr/ts-node-dev)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14+  
- MongoDB connection (local or Atlas)  

### Installation

1. Clone the repo  
   ```bash
   git clone https://github.com/sojibshekh/next-lavel-a3


2. Install dependencies 
   ```bash
    cd next-lavel-a3 
    npm install

3. Run the app in dev mode
   ```bash
    npm run dev




## 🧭 Book Endpoints
| Method | Endpoint         | Description                 |
| ------ | ---------------- | --------------------------- |
| POST   | `/api/books`     | Create a new book           |
| GET    | `/api/books`     | Get all books (with filter) |
| GET    | `/api/books/:id` | Get a book by Id            |
| PUT    | `/api/books/:id` | Update a book               |
| DELETE | `/api/books/:id` | Delete a book               |


## 🧭  Borrow Endpoints

| Method | Endpoint      | Description                            |
| ------ | ------------- | -------------------------------------- |
| POST   | `/api/borrow` | Borrow a book (decreases availability) |
| GET    | `/api/borrow` | Summary of borrowed counts per book    |


