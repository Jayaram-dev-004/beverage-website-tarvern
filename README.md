# 🍹 Beverage Website

## 📌 Overview
This is a **fully responsive** beverage website built using **React (Vite)**, featuring dynamic product categories, customer history tracking, authentication pages, and smooth UI animations.

## 🚀 Features

### 🏠 Home Page
- Elegant UI with an **animated hero section**.
- Showcases the platform's functionality.

### 🔐 Authentication
- **Sign-In Page**
  - Collects **Name, Email, Password, and Location**.
  - Implements form validation.
  - Uses **Axios** with a `try-catch` block for form submission.
  - Redirects users to the login page if they already have an account.
- **Login Page**
  - Accepts **Email and Password**.
  - Handles authentication via API calls.

### 🍾 Product Management
- **Product Categories:**
  - "Premium Whiskey", "Dark Rum", "Classic Vodka", "Red Wine", "Craft Beer".
  - Each category has **10 dynamically loaded products**.
- **Product Listing & Filtering:**
  - Left sidebar displays available categories.
  - Clicking a category dynamically updates the displayed products.
- **Add New Products**
  - Users can dynamically add new products to a category.
  - The newly added products persist during the session.

### 📜 Customer History
- Three dynamically updating tabs:
  - **Purchased**
  - **Recent Orders**
  - **Current Orders**
- Data updates in real-time based on the selected tab.

### 🎨 UI & Animations
- **Fully responsive UI** with CSS media queries.
- **Smooth animations** on page transitions and product selections.
- **Pure CSS styling** without external UI libraries.

### 🌍 Routing & Navigation
- Uses **React Router** for page navigation.
- **Protected Routes** ensure only authenticated users can access certain pages.
- Handles **undefined routes** with a custom `404 Not Found` page.
- `useNavigate` ensures smooth navigation.

### 🔄 State Management
- Uses **React Context API** to manage:
  - Global product data.
  - Selected category.
  - Customer history.

## 🛠️ Technologies Used
- **React (Vite)** – Fast development & optimized build.
- **React Router** – For page navigation.
- **Axios** – For API requests.
- **CSS (Modules)** – For responsive styling.
- **Context API** – For global state management.

## 📦 Installation & Setup

1️⃣ Clone the repository:
```sh
git clone https://github.com/Jayaram-dev-004/beverage-website-tarvern.git
```

2️⃣ Navigate into the project directory:
```sh
cd beverage-website
```

3️⃣ Install dependencies:
```sh
npm install
```

4️⃣ Start the development server:
```sh
npm run dev
```

## 🙌 Contributors
- **Jayaram** – Lead Developer 🚀
- Open for contributions! Feel free to submit a pull request.

---

📢 **Have a suggestion?** Open an issue or contribute to the project!
