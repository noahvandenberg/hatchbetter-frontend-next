# Hatch Better Full Stack Assessment Frontend

Marvelous 2.0 Frontend is a React-based web application for managing tasks. It provides an intuitive user interface for adding, updating, and deleting tasks, as well as searching and filtering tasks in both "To Do" and "Done" lists. The frontend is built using TypeScript, React, and CSS.

This project is deployed on Vercel. You can visit the live application at [https://hatch.noahvandenberg.com](https://hatch.noahvandenberg.com).

For the backend API server, please visit the [Hatch Better Full Stack Assessment Backend Repository](https://github.com/noahvandenberg/hatchbetter-backend-ts).

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
   cd hatchbetter-frontend-next
   ```

2. Install dependencies.

   ```bash
   yarn install
   ```

3. Create a `.env.local` file in the root directory of the project and add the following environment variables.

   ```bash
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```

   Replace `http://localhost:3001` with the URL of the Marvelous 2.0 Backend API server.

4. Start the development server.

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
