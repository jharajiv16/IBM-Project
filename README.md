# 📌 Digital Notice Board

A simple, responsive, and secure digital notice board application built with vanilla HTML, CSS, and JavaScript. Manage and display announcements in a clean interface with support for dark mode, filtering, and local persistence.

## 🚀 Features

- **Public View**:
  - View all active notices in a responsive grid layout.
  - **Search**: Real-time filtering by keyword (title or content).
  - **Filter**: Categorize notices by type (General, Urgent, Event).
  - **Theme Toggle**: Switch between Light and Dark modes (preference saved).
- **Admin Dashboard**:
  - Secure access via password login.
  - **Create Notice**: Add new announcements with title, content, and category.
  - **Edit Notice**: Modify existing announcements.
  - **Delete Notice**: Remove outdated notices with confirmation.
  - **Logout**: Securely exit admin mode.
- **Persistence**: Notices and theme preferences are saved in the browser's `localStorage`, ensuring data remains after refreshing the page.

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3 (CSS Variables, Flexbox, Grid, Animations).
- **Logic**: Vanilla JavaScript (ES6+), DOM Manipulation, LocalStorage API.
- **Icons**: SVG icons for theme and actions.

## 📦 Installation & Setup

No backend or server is required! This is a client-side application.

1.  **Clone or Download** the repository.
2.  Open the `index.html` file in your web browser.

**That's it!** The application is now running.

## 📖 Usage Guide

### Default Credentials

- **Admin Password**: `admin123`

### 1. Viewing Notices (Public Mode)

- **Search**: Type in the search bar to find specific notices.
- **Filter**: Use the dropdown to view only `General`, `Urgent`, or `Event` notices.
- **Theme**: Click the **Sun/Moon** icon in the header to toggle dark mode.

### 2. Managing Notices (Admin Mode)

1.  Click the **Admin** button in the navigation bar.
2.  Enter the password: `admin123`
3.  **Create**: Fill in the "Create Announcement" form at the top and click `🚀 Publish`.
    - _Note: Title max 50 chars, Content max 200 chars._
4.  **Edit**: collaborative Click the `Edit` button on any notice card to load it into the form. Update details and click `Save Changes`.
5.  **Delete**: Click the `Delete` button on a notice card and confirm the action in the modal.

## 📂 Project Structure

```
├── index.html      # Main structure and layout
├── IBM.css         # Styles, themes, and animations
├── IBM.js          # Application logic, state management, and events
└── README.md       # Project documentation
```

## 🎨 Design

The project features a modern, clean UI with:

- **Smooth Animations**: Hover effects, modal transitions, and toast notifications.
- **Responsive Layout**: Optimized for desktop, tablet, and mobile screens.
- **Visual Cues**: Color-coded badges for different notice categories (Blue for General, Red for Urgent, Green for Events).

## 📄 License

This project is open-source and available for educational purposes.
