# ToDoApp

## Overview

Welcome to the Todo App! This project is a full-stack application that allows users to create, read, update, and delete (CRUD) tasks. Built with React on the frontend and Django on the backend, this app demonstrates how to integrate these two powerful technologies to build a robust and user-friendly application.

## Features

- **Create Tasks**: Add new tasks with a title and description.
- **Read Tasks**: View a list of all tasks.
- **Update Tasks**: Edit existing tasks.
- **Delete Tasks**: Remove tasks from the list.

## Technologies Used

- **Frontend**: React, React Router, Axios
- **Backend**: Django, Django REST Framework
- **Database**: SQLite (default), but easily configurable to other databases like PostgreSQL.
- **Styling**: CSS Modules, Bootstrap

## Getting Started

### Prerequisites

- Node.js (for React)
- Python (for Django)
- pip (Python package installer)
- Virtualenv (optional but recommended for Python environment management)

### Backend Setup (Django)

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app/backend
   ```

2. **Create a virtual environment:**

   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Apply migrations:**

   ```bash
   python manage.py migrate
   ```

5. **Run the server:**

   ```bash
   python manage.py runserver
   ```

   The backend API will be available at `http://localhost:8000`.

### Frontend Setup (React)

1. **Navigate to the frontend directory:**

   ```bash
   cd ../frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the React development server:**

   ```bash
   npm start
   ```

   The frontend will be available at `http://localhost:3000`.

### Configuration

1. **Set up environment variables:**

   - Create a `.env` file in the `frontend` directory and add the following:

     ```
     REACT_APP_API_URL=http://localhost:8000/
     ```

   - (Optional) Set up any other environment variables as needed for your configuration.

2. **Django CORS Settings:**

   - Install the `django-cors-headers` package:

     ```bash
     pip install django-cors-headers
     ```


## Folder Structure

- `backend/` - Django backend code
  - `todo_api/` - Django app for the Todo API
  - `todo_project/` - Django project settings
  - `manage.py` - Django management script

- `frontend/` - React frontend code
  - `src/` - Source code for React components
  - `public/` - Static files

## API Endpoints

- **GET /todos/** - List all tasks
- **POST /todos/** - Create a new task
- **GET /todo/{id}/** - Retrieve a specific task
- **PUT /todo/{id}/** - Update a specific task
- **DELETE /todo/{id}/** - Delete a specific task

## Contributing

We welcome contributions to improve the app! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.



## Contact

For any questions or feedback, please open an issue on GitHub or contact us at [hussein.hassan2020@outlook.com](mailto:hussein.hassan2020@outlook.com).

Happy coding! 🚀