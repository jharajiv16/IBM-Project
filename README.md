# 📌 Digital Notice Board

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)
![Technololgy](https://img.shields.io/badge/built%20with-HTML%20%7C%20CSS%20%7C%20JS-orange)

A modern, responsive, and secure **Digital Notice Board** application built with vanilla web technologies. Manage and display announcements in a clean interface with support for dark mode, filtering, and local persistence. No backend required!

## 🚀 Key Features

- **Create, Read, Update, Delete (CRUD)** operations for notices.
- **Public View**: Filter by category (General, Urgent, Event) and search in real-time.
- **Admin Dashboard**: secure access via password (`admin123`) to manage content.
- **Dark Mode**: Toggle between light and dark themes (preference saved).
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **Local Persistence**: Data is stored in `localStorage` so it survives page reloads.
- **Animated Background**: Engaging visual experience created with CSS.

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3 (Variables, Flexbox, Grid, Animations).
- **Logic**: Vanilla JavaScript (ES6+).
- **Storage**: Browser LocalStorage API.
- **Icons**: SVG Icons.

## 📦 Installation & Setup

Since this is a client-side application, no server installation is needed.

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/Start-Ho/Digital-Notice-Board.git
    ```
2.  **Navigate to the Directory**:
    ```bash
    cd Digital-Notice-Board
    ```
3.  **Run the App**:
    - Simply open the `index.html` file in your preferred web browser.

## 📖 Usage Guide

### **Public View**

- **Browse**: View all active notices.
- **Search**: Use the search bar to find specific announcements.
- **Filter**: Sort by `General`, `Urgent`, or `Event`.
- **Theme**: Click the ☀️/🌙 icon to toggle themes.

### **Admin Panel**

1.  Click the **Admin** button in the top navigation bar.
2.  Enter the password: **`admin123`**.
3.  **Create Notice**: Fill in the title, content, select a category, and click `🚀 Publish`.
4.  **Edit Notice**: Click `Edit` on any card to modify it.
5.  **Delete Notice**: Click `Delete` to remove an announcement permanently.
6.  **Logout**: Click `Logout` to return to public view.

## 📂 Project Structure

```bash
Digital-Notice-Board/
├── index.html      # Main application structure
├── IBM.css         # Styling, themes, and animations
├── IBM.js          # Core logic (CRUD, Events, Storage)
└── README.md       # Project documentation
```

## 🎨 Design Highlights

- **Glassmorphism Effects**: Modern card designs.
- **Smooth Transitions**: Hover effects and modal animations.
- **Category Badges**: Color-coded indicators for quick scanning.
  - 🔵 **General**
  - 🔴 **Urgent**
  - 🟢 **Event**

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/YourFeature`).
5.  Open a Pull Request.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
