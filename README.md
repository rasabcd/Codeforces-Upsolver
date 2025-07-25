# 🚀 Codeforces Upsolver

> A smart practice assistant that helps competitive programmers identify and organize unsolved Codeforces problems from contests they've attempted.  

---

## 📌 Overview

Codeforces Upsolver helps users improve their competitive programming skills by:
- Recommending unsolved problems from previously attempted contests
- Filtering problems by tags, ratings, contest type, and slot
- Organizing practice through to-do lists and tasks
- Tracking solved/pending problems in each task

---

## ✨ Features

### ✅ User Authentication & Handle Verification
- Secure login using JWT
- Codeforces handle verification by setting a one-time code as the first name

### 🎯 Smart Problem Recommender
- Pulls user's attempted contests via Codeforces API
- Filters out already solved problems
- Problem filtering options:
  - 📚 Tags (e.g. `dp`, `greedy`, `graphs`)
  - 📊 Ratings (800–3500)
  - 🏆 Contest Type (Div. 2, Global, Educational, etc.)
  - 🔠 Slot (A/B/C...)

### 🗂️ To-Do Task Manager
- Create custom tasks (e.g., "DP Week", "Greedy Practice")
- Add multiple problems to each task
- Track total, solved, and pending counts

### 💻 Full-Stack Implementation
- Frontend: Elegant UI with Tailwind CSS, DaisyUI, and Lucide icons
- Backend: Optimized filtering and logic using Express, MongoDB, and Codeforces API

---

## 🛠️ Tech Stack

| Layer     | Technology                  |
|-----------|-----------------------------|
| Frontend  | React, Vite, Tailwind CSS, DaisyUI |
| Backend   | Node.js, Express            |
| Database  | MongoDB                     |
| Auth      | JWT                         |
| External  | Codeforces Public API       |
| UI Icons  | Lucide                      |

---

