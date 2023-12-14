# Mini Management System user

A Node.js based User Management System leveraging Express.js, MySQL2, and EJS for server-side templating. This application supports basic CRUD operations, providing a minimalistic interface for managing users.



## Features
---
- **Home (/):** Displays a list of all users. If no users are found, it prompts that none exist.
- **Add Users (/add-users):** Provides a form to add new users, requiring name, email, and comment.
- **Admin Dashboard (/admin/dashboard/):**  Allows admin actions like deleting users.
- **Edit Users (/edit-users/:userId):** Facilitates editing existing user information with changes reflected in the MySQL database.


## Technologies
---
- **Express.js:** Web application framework for Node.js.
- **MySQL2:** MySQL client for Node.js with improved features and performance.
- **EJS:** Embedded JavaScript templating engine.
- **Nodemon:** Utility that monitors for any changes in your source and automatically restarts your server.
 
## Installation
- Ensure that Node.js and MySQL are installed on your machine.
- MySQL should be up and running with user credentials matching those provided for the application.

# Database Setup

```bash
CREATE DATABASE IF NOT EXISTS `node-complete`;
USE `node-complete`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `comment` text
);
```

## Setup

1. Clone the GitHub repository:
```bash
git clone https://github.com/m-mdy-m/MySQLNodeCrud.git
cd MySQLNodeCrud
```
2. Install dependencies:
```bash
npm install
```

3.  Create a .env file in the root directory and fill it with your database credentials as follows:
```bash
DB_HOST=localhost
DB_USER=root
DB_PASS=mdy_mmshly13831922
DB_NAME=node-complete
```
Make sure not to expose your database password in version control.

5. start 
```bash
npm start
```
The application should now be running on `http://localhost:3000``.



# Usage
- **Viewing Users:** Simply navigate to the home page at `http://localhost:3000/`.
- **Adding a User:** Click the ‘Add Users’ link or navigate to `/add-users`, fill out the form, and submit.
- **Editing a User:** Use the ‘Edit’ button on a user’s entry on the home page, or manually navigate to `/edit-users/:userId` with the proper ID and editing mode query set.
- **Deleting a User:** While on the admin dashboard, click the ‘Delete’ button beside any user’s entry to remove them.



# Contributing
Contributions to enhance the application are welcome. Please ensure to follow the standard Git workflow - fork the repository, make changes, and submit a pull request.


## License
This project is licensed under the MIT License - see the LICENSE.md file for details.