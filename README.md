# 📘 Electronics Learning Platform (React + Vite)

A modern **React-based educational web application** built by converting a static HTML/CSS/JavaScript project into a dynamic, component-driven architecture.

This project was developed for academic submission and demonstrates real-world frontend development practices using React and Vite.

---

## 🚀 Tech Stack

* ⚛️ **React (Functional Components)**
* ⚡ **Vite (Fast Build Tool)**
* 🔀 **React Router DOM (Client-side Routing)**
* 📦 **PropTypes (Type Checking)**
* 🎨 **CSS (Reused & Optimized from Original Design)**

---

## ✨ Key Features

* 🌐 Multi-page website converted into a **Single Page Application (SPA)**
* 🔀 Smooth navigation using **React Router**
* 🧩 Reusable components (Navbar, Footer, PageHero, Cookie Banner)
* ⚡ Efficient state management using **useState**
* 🔄 Lifecycle handling using **useEffect**
* 🔗 Props validation using **PropTypes**
* 📝 Form handling with validation
* 🧠 Interactive quiz system
* 🍪 Cookie consent banner
* 📱 Responsive UI design
* 🚀 Production-ready deployment

---

## 📁 Project Structure

```
project_r/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
│
├── public/
│   └── style.css
│
├── index.html
└── package.json
```

---

## 🛠️ Installation & Setup

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Run development server

```bash
npm run dev
```

### 3️⃣ Open in browser

```
http://localhost:5173
```

---

## 🏗️ Production Build

```bash
npm run build
npm run preview
```

---

## 🌍 Deployment

### 🔹 Vercel (Recommended)

Create `vercel.json` in root:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

Deploy settings:

* Build Command: `npm run build`
* Output Directory: `dist`

---

### 🔹 Netlify (Alternative)

Create file: `public/_redirects`

```
/* /index.html 200
```

---

## 📦 Submission Checklist

* ✔ GitHub Repository Link
* ✔ Live Deployed URL
* ✔ Proper Documentation (README)

---

## 👤 Author

**Name:** Hrushaibh
**Course:** Web Programming
**Year:** Second Year

---

## 📌 Learning Outcomes

This project demonstrates:

* Component-based architecture in React
* Effective use of React Hooks
* Client-side routing with React Router
* Code modularity and reusability
* Real-world deployment workflow

---

## ⭐ Acknowledgment

This project is developed as part of academic coursework and reflects practical implementation of modern frontend technologies.

---
