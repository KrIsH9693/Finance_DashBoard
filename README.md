# 💰 Finance Dashboard

A modern and responsive **Finance Dashboard** built using **React + TypeScript + Tailwind CSS**, designed to help users manage their financial data with role-based access control.

---

## 🚀 Live Demo



---

## 📌 Features

### 🔐 Role-Based Access

* **Admin**

  * Add transactions
  * Delete transactions
  * Full control over data

* **Viewer**

  * Read-only access
  * Can only view transactions

---

### 📊 Dashboard Overview

* Clean and modern UI
* Financial summary cards
* Insights section with key metrics
* Transaction history

---

### 📈 Data Visualization

* Charts for income & expenses
* Clear financial trends

---

### 🧠 Insights Engine

* Highest spending category
* Total income & expenses
* Net savings calculation

---

### 🎨 UI/UX

* Smooth animations (Framer Motion)
* Responsive layout
* Glassmorphism-inspired design
* Clean typography and spacing

---

## 🛠️ Tech Stack

| Technology    | Usage            |
| ------------- | ---------------- |
| React         | UI Development   |
| TypeScript    | Type Safety      |
| Tailwind CSS  | Styling          |
| Context API   | State Management |
| Framer Motion | Animations       |

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── cards/
│   ├── charts/
│   ├── common/
│   ├── insights/
│   └── transactions/
│
├── context/
│   └── AppContext.tsx
│
├── utils/
│   └── insights.ts
│
├── App.tsx
└── main.tsx
```

---

## ⚙️ Installation & Setup

```bash
# Clone the repo
git clone 

# Navigate into project
cd finance-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🔄 State Management

* Managed using **React Context API**
* Centralized state for:

  * Transactions
  * User Role (Admin / Viewer)
  * Theme (if enabled)

---

## 🧩 Key Functionalities Explained

### ➤ Transactions

* Stored in global state
* Dynamically rendered list
* Role-based actions applied

### ➤ Insights Logic

* Utility functions calculate:

  * Total Income
  * Total Expenses
  * Top Category
  * Net Savings

---

## 📱 Responsiveness

* Fully responsive across:

  * Mobile 📱
  * Tablet 📲
  * Desktop 💻

---

## 🧪 Future Improvements

* Edit transaction feature
* Backend integration (Firebase / Node.js)
* Authentication system
* Dark mode enhancement
* Export reports (PDF/CSV)

---

## 🙌 Author

**Ai Maker**

---

## ⭐ Final Note

This project demonstrates:

* Clean UI design principles
* Scalable component structure
* Real-world role-based logic
* Practical use of React ecosystem

---

> 💡 *Built with focus, consistency, and attention to detail.*
