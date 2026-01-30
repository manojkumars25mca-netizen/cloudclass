# Student CRUD API

A simple Node.js REST API for managing student data using Express.js and MySQL.

## Features

- **GET** `/students` - Fetch all students
- **POST** `/students/add` - Add a new student
- **PUT** `/students/update/:id` - Update student by ID
- **DELETE** `/students/delete/:id` - Delete student by ID

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MySQL2** - MySQL database driver
- **Middleware** - Custom request logging

## Installation

1. Clone the repository:
```bash
git clone https://github.com/<YOUR_USERNAME>/student-crud-api.git
cd student-crud-api
```

2. Install dependencies:
```bash
npm install
```

3. Set up MySQL database:
```sql
CREATE DATABASE first_pro;
USE first_pro;

CREATE TABLE student (
    id INT PRIMARY KEY,
    name VARCHAR(20),
    dept VARCHAR(20)
);

INSERT INTO student VALUES (1, 'Gowtham', 'MCA');
INSERT INTO student VALUES (2, 'Barane', 'MCA');
INSERT INTO student VALUES (3, 'Logesh', 'MCA');
INSERT INTO student VALUES (4, 'Aishu', 'MCA');
INSERT INTO student VALUES (5, 'Kruthi', 'MCA');
```

4. Update database credentials in `Data/db.js` if needed:
```javascript
host: 'localhost',
user: 'root',
password: 'kongu',
database: 'first_pro'
```

## Running the Server

```bash
node server.js
```

Server runs on **http://localhost:3000**

## API Endpoints

### Get All Students
```
GET /students
```
**Response:**
```json
[
  { "id": 1, "name": "Gowtham", "dept": "MCA" },
  { "id": 2, "name": "Barane", "dept": "MCA" }
]
```

### Add a Student
```
POST /students/add
Content-Type: application/json

{
  "id": 6,
  "name": "John",
  "dept": "MCA"
}
```

### Update a Student
```
PUT /students/update/1
Content-Type: application/json

{
  "name": "Updated Name",
  "dept": "CSE"
}
```

### Delete a Student
```
DELETE /students/delete/1
```

## Project Structure

```
├── server.js           # Main Express app
├── package.json        # Dependencies
├── Controller/
│   └── control.js      # Route handlers (CRUD logic)
├── Router/
│   └── route.js        # API routes
├── Data/
│   └── db.js           # MySQL connection
├── Middleware/
│   └── middle.js       # Custom middleware (request logger)
└── README.md           # This file
```

## Testing with Postman

1. Open Postman
2. Set method and URL:
   - **GET** `http://localhost:3000/students`
   - **POST** `http://localhost:3000/students/add`
   - **PUT** `http://localhost:3000/students/update/1`
   - **DELETE** `http://localhost:3000/students/delete/1`
3. For POST/PUT: Set **Body** → **raw** → **JSON** and add request body
4. Send the request

## Error Handling

- **404 Not Found** - Student with given ID doesn't exist
- **500 Internal Server Error** - Database query error
- Errors are logged to console with error messages

## Author

Gowtham

## License

MIT
