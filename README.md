# Node.js Express Project with Sequelize

This project is a basic web application using Node.js, Express, EJS, and Sequelize ORM, designed to perform CRUD operations on a MySQL database.

## Technologies Used

### Node.js
An open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

### Express.js
A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

### EJS
Embedded JavaScript templating. A simple templating language that lets you generate HTML markup with plain JavaScript.

### Sequelize
A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication, and more.

### MySQL
An open-source relational database management system based on SQL – Structured Query Language.

### Body-parser
A Node.js body parsing middleware. Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

### Nodemon
A utility that will monitor for any changes in your source and automatically restart your server. Perfect for development.


## Prerequisites

- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
- MySQL - [Download & Install MySQL](https://dev.mysql.com/downloads/), and set up a local database.
 
## Installation
Clone the project repository:

- . Clone the GitHub repository:
```bash
git clone https://github.com/m-mdy-m/SeqNodejsProject.git
cd SeqNodejsProject
```
- . Install dependencies:
```bash
npm install
```

## Configuration

3.  Create a .env file in the root directory of the project. Update the following configurations according to your database setup:
```bash
DB_USERNAME= root
DB_PASSWORD= mdy_mmshly13831922
DB_DATABASE= node-complete
DB_HOST= localhost
```
Make sure not to expose your database password in version control.

## Running the Application

```bash
npm start
```
The application should now be running on `http://localhost:3000``.

# Application Paths


- **Home:** `GET /` => The landing page for the application.
- **Add Users:** `GET /add-users` => A form for adding a new user to the database.
- **Admin Dashboard:** `GET /admin/dashboard` =>  The admin dashboard where you can view the list of users.
- **Edit Users:** `GET /edit-users/:userId` => A form to edit an existing user’s details. Replace :userId with the actual ID of the user you wish to edit.



# Usage
- **Viewing Users:** Simply navigate to the home page at `http://localhost:3000/`.
- **Adding a User:** Click the ‘Add Users’ link or navigate to `/add-users`, fill out the form, and submit.
- **Editing a User:** Use the ‘Edit’ button on a user’s entry on the home page, or manually navigate to `/edit-users/:userId` with the proper ID and editing mode query set.
- **Deleting a User:** While on the admin dashboard, click the ‘Delete’ button beside any user’s entry to remove them.



## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
