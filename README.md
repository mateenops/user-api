
# NestJS User Management API

A simple RESTful API built with NestJS to manage user information. The API includes endpoints to create and retrieve users, integrates with a PostgreSQL database, and is containerized using Docker and Docker Compose.

---

## Features

- **Create User**: Add a new user with `name`, `email`, and `age`.
- **Get Users**: Retrieve all users from the database.
- **Validation**: Input validation for user fields (e.g., non-empty, valid email).
- **Database**: PostgreSQL integration for data storage.
- **Containerization**: Docker and Docker Compose for easy setup and deployment.
- **Swagger API Documentation**: Explore and test API endpoints.

---

## Prerequisites

Ensure you have the following installed:
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/) (if running locally without Docker)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/nestjs-user-management.git
cd nestjs-user-management
```

### 2. Environment Variables

Create a `.env` file in the root directory with the following content:

```env
DATABASE_HOST=db
DATABASE_PORT=5432
DATABASE_NAME=users
DATABASE_USER=mateen
DATABASE_PASSWORD=mateen123
```

### 3. Run with Docker

#### Build and Start the Application
```bash
docker-compose up --build
```

#### Access the Application
- API: `http://localhost:3000`
- Swagger Documentation: `http://localhost:3000/api`

### 4. Run Locally (Without Docker)

#### Install Dependencies
```bash
npm install
```

#### Run the Application
```bash
npm run start:dev
```

#### Ensure PostgreSQL is Running
Modify `src/app.module.ts` for local database connection if necessary.

---

## Endpoints

### POST /users
**Request**:
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 25
}
```

**Response**:
```json
{
  "userId": 1,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 25
}
```

### GET /users
**Response**:
```json
[
  {
    "userId": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 25
  }
]
```

---

## Database Schema

- **Table**: `users`
- **Columns**:
  - `userId` (Primary Key)
  - `name` (String)
  - `email` (String, Unique)
  - `age` (Integer)

---

## Contribution

Contributions are welcome! Feel free to fork this repository and submit a pull request.

---

## License

This project is licensed under the MIT License.
