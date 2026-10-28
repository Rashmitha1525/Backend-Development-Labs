

\# Lab 1 — Node.js and Express Server



\## Student Details

\- \*\*Name:\*\* Sai Rashmitha

\- \*\*Section:\*\* CSE (Gen-AI) 2A

\- \*\*University:\*\* Aurora Deemed to be University

\- \*\*Subject:\*\* Backend Development Fundamentals

\- \*\*Year / Term:\*\* Year II, Term II

\- \*\*Faculty:\*\* Mr. Joel Prashanth D.



\## Aim

To create a basic HTTP server using Node.js and build a web server using Express.js with multiple routes and error handling.



\## Technologies Used

\- Node.js

\- Express.js

\- JavaScript

\- Visual Studio Code

\- PowerShell


## GitHub Repository

- GitHub Profile: [Rashmitha1525](https://github.com/Rashmitha1525)


\## Project Structure

```text

lab-01/

├── server.js

├── app.js

├── package.json

├── package-lock.json

├── .gitignore

├── README.md

└── screenshots/

```



\## Part 1: Node.js HTTP Server

The `server.js` file uses Node.js's built-in `http` module to create a server on port 3000. It responds with the text `Hello`.



\## Part 2: Express Server

The `app.js` file creates an Express server and includes these routes:



\- `/` — Displays the welcome message.

\- `/about` — Returns the student's name and section as JSON.

\- `/time` — Returns the current date and time as JSON.

\- Unknown routes — Return a 404 Page Not Found response.



The application uses `process.env.PORT || 3000` to support deployment platforms.



\## How to Run



1\. Install Node.js.

2\. Open a terminal in the project folder.

3\. Install the dependencies:



&#x20;  ```bash

&#x20;  npm install

&#x20;  ```



4\. Run the Node.js HTTP server:



&#x20;  ```bash

&#x20;  node server.js

&#x20;  ```



5\. Stop it with `Ctrl + C`.

6\. Run the Express server:



&#x20;  ```bash

&#x20;  node app.js

&#x20;  ```



7\. Open `http://localhost:3000` in a browser.



\## Testing

\- `/` — Expected status: 200 OK.

\- `/about` — Expected status: 200 OK with student details in JSON.

\- `/time` — Expected status: 200 OK with current date and time.

\- `/unknown` — Expected status: 404 Not Found.




## Screenshots

### 1. Home Page

![Home Page](screenshots/home.png)

### 2. About Page

![About Page](screenshots/about.png)

### 3. Time Page

![Time Page](screenshots/time.png)



\## Result

The Node.js HTTP server and Express server were created and tested successfully. The application supports multiple routes and returns a 404 response for unknown routes.



