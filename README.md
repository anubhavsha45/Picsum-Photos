# 📸 Picsum Photo Gallery

A responsive **React Photo Gallery** that fetches images from the **Picsum API**, allows users to search by photographer name, and mark photos as favorites.

This project was built as part of a **Frontend React Internship Pre-Screening Assignment**.

---

## 🚀 Live Features

* 📷 Fetches photos from the **Picsum API**
* 🔎 **Search photos by author name**
* ❤️ **Favorite photos** using a heart button
* 💾 Favorites persist using **localStorage**
* ⚡ Performance optimized using **useMemo** and **useCallback**
* 📱 Fully **responsive grid layout**

---

## 🛠 Tech Stack

* **React (Vite)**
* **Tailwind CSS**
* **React Hooks**

  * `useState`
  * `useEffect`
  * `useReducer`
  * `useMemo`
  * `useCallback`
* **LocalStorage**

---

## 📦 Project Structure

```
src
 ├── components
 │     ├── PhotoCard.jsx
 │     ├── PhotoGrid.jsx
 │     └── SearchBar.jsx
 │
 ├── hooks
 │     └── useFetchPhotos.js
 │
 ├── context
 │     └── favoritesReducer.js
 │
 ├── App.jsx
 └── main.jsx
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/anubhavsha45/Picsum-Photos.git
```

Navigate into the project

```bash
cd Picsum-Photos
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

---

## 📡 API Used

Picsum Photos API

```
https://picsum.photos/v2/list?limit=30
```

---

## ✨ Key Implementation Details

### Custom Hook

API fetching logic is separated into a reusable hook:

```
useFetchPhotos
```

### Favorites State Management

Favorites are managed using **useReducer** to handle toggle actions and persisted using **localStorage**.

### Performance Optimization

* `useMemo` is used to memoize filtered photo results.
* `useCallback` is used to memoize the search handler to prevent unnecessary re-renders.

---

## 👨‍💻 Author

**Anubhav Sharma**

GitHub:
https://github.com/anubhavsha45

---

## 📄 License

This project was created for an internship assignment and is intended for educational purposes.
