const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (response) =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${response.title}</title>
    </head>
    <body>
    <header>
        <h1>Hello my name is ${response.username}</h1>
        <h4>I am from ${response.location}</h4>
    </header>
    <main>
        <p>Here is my bio: ${response.bio}</p>
    </main>
    <footer>
        <p>Here is my LinkedIn URL: <a href="${response.linkedin}">${response.linkedin}</a></p>
        <p>Here is my GitHub URL: <a href="${response.github}">${response.github}</a></p>
    </footer>
    </body>
    </html>`
;
