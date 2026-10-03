# 📝 Notes App

A simple and responsive **Notes App** built with **HTML, CSS, and JavaScript** that allows users to create, edit, save, and delete notes directly in the browser.

Notes are persisted using the browser's **Local Storage**, so they remain available even after refreshing or reopening the page. The application uses dynamic DOM manipulation and event handling to provide a clean note-taking experience.

---

## 🚀 Live Demo

> Add your GitHub Pages deployment URL here after deploying the project.

**Live Demo:** `https://your-username.github.io/Notes-App/`

---

## 📸 Preview

*Add a screenshot of the Notes App here if you have one.*

```md
![Notes App Screenshot](notes-app-screenshot.png)
```

---

## ✨ Features

* 📝 **Create Notes** — Create a new note with a single click.
* ✏️ **Edit Notes** — Edit note content directly inside the note card.
* 💾 **Persistent Storage** — Notes are saved in browser `localStorage`.
* 🗑️ **Delete Notes** — Remove notes when they are no longer needed.
* 🕒 **Update Timestamp** — Displays the latest update date and time for each note.
* 🔄 **Automatic Rendering** — Notes are dynamically rendered using JavaScript.
* ⌨️ **Keyboard Handling** — Supports line breaks while editing notes.
* 📱 **Responsive Design** — Layout adapts to smaller screen sizes.
* 📭 **Empty State** — Displays a helpful message when no notes exist.
* 🎨 **Clean UI** — Simple card-based interface with hover interactions.

The current implementation stores notes under the `notes-app` local-storage key and creates note IDs using timestamps.

---

## 🛠️ Tech Stack

| Technology            | Purpose                                          |
| --------------------- | ------------------------------------------------ |
| **HTML5**             | Application structure and semantic markup        |
| **CSS3**              | Styling, layout, responsive design and UI states |
| **JavaScript (ES6+)** | Application logic and DOM manipulation           |
| **Local Storage API** | Persistent browser-side note storage             |
| **Date API**          | Note creation/update timestamps                  |
| **DOM API**           | Dynamic note creation, editing and deletion      |

The project has no backend or external API dependency; notes are managed entirely in the browser.

---

## 📂 Project Structure

```text
Notes-App/
│
├── index.html
├── script.js
├── style.css
└── README.md
```

### File Responsibilities

* `index.html` — Defines the application structure, header, create-note button and notes container.
* `style.css` — Handles the visual design, note cards, buttons, grid layout and mobile responsiveness.
* `script.js` — Implements note creation, editing, deletion, rendering, timestamps and local storage.
* `README.md` — Project documentation.

The repository currently contains these four files at the root level.

---

## ⚙️ How It Works

### 1. Load Existing Notes

When the application starts, JavaScript reads previously saved notes from Local Storage:

```javascript
let notes = JSON.parse(localStorage.getItem("notes-app")) || [];
```

If no saved notes exist, an empty array is used.

### 2. Create a Note

Clicking **Create Note** generates a new note containing:

* Unique ID
* Empty text
* Creation timestamp
* Update timestamp

The new note is added to the beginning of the notes array and immediately saved to Local Storage.

### 3. Edit a Note

Each note uses a `contenteditable` element, allowing the user to type directly inside the note.

Whenever the content changes:

1. The corresponding note is identified.
2. Its text is updated.
3. The `updatedAt` timestamp is refreshed.
4. The updated notes array is saved to Local Storage.

### 4. Delete a Note

The Delete button identifies the note using its ID, removes it from the notes array, saves the updated data, and re-renders the notes list.

### 5. Display Timestamps

The application formats each note's `updatedAt` value using JavaScript's `Date` and `toLocaleString()` APIs.

---

## 💾 Data Persistence

This project uses **Browser Local Storage** instead of a backend database.

The basic data flow is:

```text
User creates/edits/deletes note
              ↓
        JavaScript updates
          notes array
              ↓
       saveNotes() function
              ↓
        Browser Local Storage
              ↓
       Page reloads
              ↓
     Previously saved notes
        are restored
```

This makes the application useful as a lightweight client-side note-taking project without requiring a server or database.

---

## 🎨 Responsive Design

The interface uses CSS Grid to display notes in a flexible card layout.

On smaller screens, the application switches to a mobile-friendly layout where:

* The header becomes vertically arranged.
* The Create Note button takes the full available width.
* The heading size is reduced.
* Notes continue to adapt to the available screen width.

These responsive rules are implemented through a CSS media query targeting screens up to `640px`.

---

## 🧠 JavaScript Concepts Demonstrated

This project demonstrates several practical JavaScript concepts:

* DOM selection
* DOM manipulation
* Event listeners
* Event delegation
* Arrays and array methods
* Objects
* `localStorage`
* JSON serialization/deserialization
* `Date` object
* `toLocaleString()`
* Template literals
* `contenteditable`
* `dataset`
* Dynamic element creation
* Conditional rendering
* Keyboard event handling

---

## 🔄 Application Flow

```text
                ┌─────────────────┐
                │   Open App      │
                └────────┬────────┘
                         ↓
              ┌─────────────────────┐
              │ Load Notes from     │
              │ Local Storage       │
              └─────────┬───────────┘
                        ↓
              ┌─────────────────────┐
              │ Render Notes        │
              └─────────┬───────────┘
                        ↓
          ┌─────────────┼─────────────┐
          ↓             ↓             ↓
     Create Note     Edit Note    Delete Note
          ↓             ↓             ↓
          └─────────────┼─────────────┘
                        ↓
              ┌─────────────────────┐
              │ Update Notes Array  │
              └─────────┬───────────┘
                        ↓
              ┌─────────────────────┐
              │ Save to Local       │
              │ Storage             │
              └─────────────────────┘
```

---

## ▶️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/KhushiChaubey-493/Notes-App.git
```

### 2. Navigate to the Project

```bash
cd Notes-App
```

### 3. Run the Application

Open `index.html` in your web browser.

For development, you can also use **VS Code Live Server** or another local static server.

No package installation, database setup, or backend configuration is required.

---

## 📌 Current Project Scope

This project currently focuses on **client-side note management**.

### Included

* Create notes
* Edit notes
* Delete notes
* Local Storage persistence
* Update timestamps
* Responsive UI
* Empty-state handling

### Not Currently Included

* User authentication
* Cloud synchronization
* Backend/database storage
* Note categories
* Search functionality
* Rich-text formatting
* Note sharing

Keeping these items separate makes the README accurately reflect the current implementation rather than claiming functionality that is not present in the repository.

---

## 🔮 Future Improvements

Possible improvements for future versions:

* 🔍 Add note search
* 🏷️ Add categories or tags
* 📌 Pin important notes
* 🌙 Add dark mode
* 🎨 Add customizable note colors
* 🔐 Add user authentication
* ☁️ Add cloud/database storage
* 📤 Export notes as TXT/JSON/PDF
* 📥 Import previously exported notes
* ↩️ Add undo/redo functionality
* 🗓️ Add created and last-edited date filters

---

## 🎯 Learning Objectives

This project was built to practice:

* Building interactive web applications with vanilla JavaScript
* Working with browser APIs
* Managing application state with JavaScript arrays
* Persisting data with Local Storage
* Handling user input and browser events
* Dynamically generating UI elements
* Creating responsive layouts with CSS
* Structuring a small frontend project cleanly

---

## 👩‍💻 Author

**Khushi Chaubey**

* GitHub: [KhushiChaubey-493](https://github.com/KhushiChaubey-493)

---

## 📄 License

This project is available for educational and personal use.

---

⭐ If you found this project useful, consider giving the repository a star.
