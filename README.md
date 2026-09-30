# 🛒 Tech Store – React

A modern and responsive **Tech Store web application** built using **React.js** and **Vite**. The project provides a clean shopping experience for browsing electronic products such as smartphones, laptops, smart watches, earbuds, and other tech products.

## 🚀 Live Project

🔗 **GitHub Repository:**
https://github.com/prashantmadival582-cmd/TechStore-Project-Using-React

---

## 📌 Project Overview

**Tech Store** is a frontend e-commerce application developed to practice and demonstrate modern React.js concepts.

The application includes product browsing, categories, search, filtering, sorting, wishlist functionality, cart management, checkout flow, and responsive UI design.

The project uses browser `localStorage` to persist cart and wishlist data without requiring a backend database.

---

## ✨ Features

### 🏠 Home Page

* Modern navigation bar
* Hero image carousel
* Product categories
* Featured products
* Product cards
* Responsive layout

### 📱 Product Management

* Product listing
* Product details
* Product search
* Brand filtering
* Price sorting
* Product ratings
* Discount information
* Best-seller labels

### 🛒 Shopping Cart

* Add products to cart
* Increase product quantity
* Decrease product quantity
* Remove products
* Calculate total price
* Persistent cart using `localStorage`

### ❤️ Wishlist

* Add products to wishlist
* Remove products from wishlist
* Persistent wishlist using `localStorage`

### 💳 Checkout

* Checkout page
* Order summary
* Customer/order information
* Order success page

### 🎨 UI/UX

* Responsive design
* Modern e-commerce interface
* Product hover effects
* Category animations
* Hero carousel
* Toast notifications
* Clean navigation
* Mobile-friendly layout

---

## 🛠️ Technologies Used

| Technology   | Purpose                       |
| ------------ | ----------------------------- |
| React.js     | Frontend UI                   |
| Vite         | Development and build tool    |
| JavaScript   | Application logic             |
| HTML5        | Page structure                |
| CSS3         | Styling and responsive design |
| React Router | Page navigation               |
| LocalStorage | Cart & wishlist persistence   |
| Git          | Version control               |
| GitHub       | Source code management        |

---

## 📂 Project Structure

```text
tech-store2/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   │
│   ├── assets/
│   │   ├── Apple.jpg
│   │   ├── earbuds2.jpg
│   │   ├── earpod1.jpg
│   │   ├── hero1.webp
│   │   ├── hero2.avif
│   │   ├── hero3.webp
│   │   ├── hero4.webp
│   │   ├── imac.webp
│   │   ├── laptop.jpg
│   │   ├── laptop.webp
│   │   ├── laptop2.jpg
│   │   ├── mobile.webp
│   │   ├── samsung.jpg
│   │   ├── watch.webp
│   │   ├── watch1.jpg
│   │   └── watch2.jpg
│   │
│   ├── component/
│   │   ├── Category.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│   │
│   ├── data/
│   │   └── data.js
│   │
│   ├── pages/
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Home.jsx
│   │   └── Success.jsx
│   │
│   ├── App.css
│   ├── index.css
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/prashantmadival582-cmd/TechStore-Project-Using-React.git
```

### 2. Navigate to the project

```bash
cd TechStore-Project-Using-React
```

If your repository contains the project inside a `tech-store2` folder:

```bash
cd tech-store2
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local URL shown by Vite, usually:

```text
http://localhost:5173
```

---

## 📦 Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 💾 LocalStorage

The application uses browser `localStorage` to maintain shopping data.

### Cart

```text
tech-cart
```

### Wishlist

```text
tech-wishlist
```

This allows cart and wishlist data to remain available after refreshing the browser.

---

## 🧩 Main React Concepts Used

This project demonstrates several important React concepts:

* Functional Components
* `useState`
* `useEffect`
* React Router
* Props
* Component Reusability
* Event Handling
* Conditional Rendering
* Array Methods
* Local Storage
* State Management
* Form Handling
* Dynamic UI Rendering

---

## 🔄 Application Flow

```text
                    Tech Store
                        │
                        ↓
                     Home
                        │
          ┌─────────────┼─────────────┐
          ↓             ↓             ↓
      Categories     Products       Search
          │             │             │
          └─────────────┼─────────────┘
                        ↓
                   Product Card
                        │
              ┌─────────┴─────────┐
              ↓                   ↓
             Cart              Wishlist
              │
              ↓
           Checkout
              │
              ↓
        Order Success
```

---

## 📱 Product Categories

The application currently focuses on technology products such as:

* 📱 Smartphones
* 💻 Laptops
* ⌚ Smart Watches
* 🎧 Earbuds
* 🖥️ Computers
* 🍎 Apple Products
* 📦 Other Electronics

---

## 🔮 Future Improvements

The project can be extended with:

* User authentication
* Backend API
* Spring Boot / Node.js backend
* MySQL or MongoDB database
* Real payment gateway
* Admin dashboard
* Product management
* User order history
* Product reviews
* Real-time order tracking
* Cloud image storage
* Redis caching
* REST API integration
* Docker deployment
* CI/CD pipeline
* AWS deployment

---

## 🎯 Learning Objectives

This project was developed to strengthen practical knowledge of:

```text
React.js
JavaScript
Component Architecture
State Management
React Router
Responsive UI
LocalStorage
Git
GitHub
Frontend Project Structure
```

---

## 👨‍💻 Developer

**Prashant S Madival**

🎓 B.E. – Computer Science Engineering

### Connect With Me

* 💼 LinkedIn:
  https://www.linkedin.com/in/prashantmadival

* 🐙 GitHub:
  https://github.com/prashantmadival582-cmd

* 💻 LeetCode:
  https://leetcode.com/u/Prashant7483/

---

## ⭐ If You Like This Project

If you find this project useful for learning React.js, feel free to ⭐ star the repository.

---

## 📄 License

This project is created for **learning and portfolio purposes**.
