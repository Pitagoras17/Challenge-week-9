// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        tyoe: "input",
        name: "Title",
        message: "Please enter the title of your project",
    },
    {
        tyoe: "input",
        name: "Description",
        message: "Provide a short description explaining the what, why, and how of your project.",
    },
    {
        tyoe: "input",
        name: "Table of Contents",
        message: "If your README is long, add a table of contents to make it easy for users to find what they need.",
    },
    {
        tyoe: "input",
        name: "Installations",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    },
    {
        tyoe: "input",
        name: "Installations",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    },
    {
        tyoe: "input",
        name: "Credits",
        message: "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.",
    },
    {
        tyoe: "input",
        name: "Licence",
        message: "The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
