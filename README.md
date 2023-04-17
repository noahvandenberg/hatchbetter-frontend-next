# Hatch Better Full Stack Assessment Frontend

Marvelous 2.0 Frontend is a React-based web application for managing tasks. It provides an intuitive user interface for adding, updating, and deleting tasks, as well as searching and filtering tasks in both "To Do" and "Done" lists. The frontend is built using TypeScript, React, and CSS.

## Features

- User-friendly interface for managing tasks
- Alphabetically sorted task lists
- Limited display of the 10 most recently completed tasks
- Real-time search functionality for both "To Do" and "Done" lists
- Single Page Web App (SPA) architecture
- Communicates with the Marvelous 2.0 Backend API server
- Data synchronization between frontend and backend (60s polling interval)

## Requirements

- Node.js v14 or later

## Installation

1. Clone the repository.

   ```bash
   git clone https://github.com/noahvandenberg/hatchbetter-frontend-next.git
   cd marvelous-frontend
   ```

2. Install dependencies.

   ```bash
   yarn install
   ```

3. Start the development server.

   ```bash
   yarn start
   ```

   The application will be running at `http://localhost:3000`.

## Usage

1. Add tasks to the "To Do" list by entering a task name and clicking the "Add" button.
2. Mark tasks as complete or incomplete by checking or unchecking the checkbox next to each task.
3. Search tasks by typing text in the search box. Both "To Do" and "Done" lists will be filtered to display only items matching the entered text.
4. Delete all tasks by clicking the "Delete All Tasks" button and confirming the action.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
