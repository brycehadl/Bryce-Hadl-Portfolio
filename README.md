# Portfolio

## Description

Personal portfolio site.

## Table of Contents

-[Installation](#installation)
If you would like to try in your local machine or use the code for reference first,

git clone <add repo's url here>
cd to the repo
Install dependencies.
Create a .env file for global variables. You should create an account with emailjs and after you have the account id, template id and public Key, you can set the globar vars.
VITE_REACT_APP_SERVICE_ID="your_emailjs_service_id"
VITE_REACT_APP_FORM_ID="your_emailjs_template_id"
VITE_REACT_APP_USER_ID="your_emailjs_user_id" (public key)
Import the globar var using meta instead of process:
"import.meta.env.(add here your global var)
ex: import.meta.env.VITE_REACT_APP_SERVICE_ID;

-[Technologies](#technologies)
React: A JavaScript library for building user interfaces, ensuring a responsive and interactive experience.
Vite: A build tool that aims to provide a faster and leaner development experience for modern web projects.
Bootstrap: A styling framework for developing with HTML, CSS, and JS, ensuring a mobile-first and responsive design.
React Router Dom: A collection of navigational components that compose declaratively with your application, enabling dynamic routing in a web app.
EmailJS: Allows sending emails directly from the client-side without needing a server-side code.
Dotenv: A zero-dependency module that loads environment variables from a .env file into process.env, managing sensitive credentials.
ESLint: A static code analysis tool for identifying problematic patterns found in JavaScript code, ensuring code quality.

-[License](#license)
License: MIT



## Usage

The portfolio site can be found here: https://playful-madeleine-59a17b.netlify.app



![Screenshot of the home screen]()<img width="1512" alt="Screenshot 2023-11-12 at 4 36 46 PM" src="https://github.com/brycehadl/netlify-test/assets/133932050/d7092f76-7d98-45e0-98ef-86ee6a8d4d6d">




This site uses netlify for hosting and React for the frontend design.



## License

This project is licensed under the MIT license.

