# Task Manager Web Application

This repository contains a **Task Manager Web Application** developed as an assignment for W3Villa Technologies. The application enables users to register, log in, and manage their tasks efficiently.

## Features

- **User Authentication**: Secure registration and login functionality using JWT.
- **Task Management**: Create, read, update, and delete tasks.
- **Responsive Design**: User-friendly interface compatible with various devices.

## Technologies Used

- **Frontend**: React.js, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Prerequisites

Before setting up the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local installation or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Hrs21/W3VILLA-Assignment.git
cd W3VILLA-Assignment
```

### 2. Backend Setup

Navigate to the `server` directory and install the dependencies:

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory with the following content:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string and `your_jwt_secret_key` with a secure key of your choice.

Start the backend server:

```bash
npm start
```

The backend server should now be running on [http://localhost:5000](http://localhost:5000).

### 3. Frontend Setup

Open a new terminal window, navigate to the `client` directory, and install the dependencies:

```bash
cd client
npm install
```

Create a `.env` file in the `client` directory with the following content:

```env
REACT_APP_API_URL=http://localhost:5000
```

Start the frontend development server:

```bash
npm start
```

The frontend application should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

1. Open [http://localhost:3000](http://localhost:3000) in your web browser.
2. Register a new account or log in with existing credentials.
3. Manage your tasks by adding, editing, or deleting them as needed.

## Project Structure

```
W3VILLA-Assignment/
├── client/      # Frontend React application
└── server/      # Backend Express API
```

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.

---

This `README.md` provides detailed instructions to set up and run the Task Manager Web Application. If you encounter any issues or have questions, feel free to open an issue in this repository.
