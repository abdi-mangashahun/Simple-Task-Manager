📝 Simple Task Manager 

A lightweight, browser-based task manager app built using HTML, CSS, and JavaScript.
It allows users to add, edit, complete, and delete tasks, with progress tracking and local storage support.
🚀 Features

    ✅ Add new tasks

    🖊 Edit existing tasks

    ☑ Mark tasks as completed

    ❌ Delete tasks

    💾 Data persists using localStorage

    📊 Dynamic progress bar showing completed/total tasks

    🎨 Simple and responsive UI with clear task states

📁 Project Structure

Simple-Task-Manager/
│
├── Dom.html        # Main HTML structure
├── Dom.css        # Styling for the app
└── Dom.js         # Main JavaScript logic

💻 Usage

    Clone the repo:

    git clone https://github.com/abdi-mangashahun/Simple-Task-Manager.git

    Open index.html in your browser.

    Start managing your tasks!
    Your tasks are saved automatically in your browser’s local storage.

🧠 How It Works

    Tasks are stored as objects in an array:

    { text: "Buy groceries", completed: false }

    When the page loads, it checks localStorage and loads saved tasks.

    Any action (add/edit/delete/toggle complete) updates the UI and saves changes to localStorage.

🔧 Technologies Used

    HTML

    CSS

    JavaScript (Vanilla)

    Browser localStorage (no backend)

📷 Demo Screenshot

(Add a screenshot here if available — e.g., assets/demo.png)
✨ Credits

Created by Abdi Gashahun
📜 License

This project is open-source and free to use. No license restrictions.
