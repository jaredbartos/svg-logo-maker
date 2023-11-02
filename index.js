// Import required modules
const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const generateSVG = require('./lib/svg');
const questions = require('./lib/questions');

// Function to write the SVG logo content to a new file
const writeSVG = (fileName, data) => {
  writeFile(fileName, generateSVG(data), (err) => {
    if (err) throw err;
  })
    .then(() => {
      console.log('Generated "logo.svg"');
  })
};

// Function to initiate app by prompting inquirer questions and writing logo file using answers
const init = () => {
  inquirer.prompt(questions)
    .then((answers) => {
      writeSVG('logo.svg', answers);
  });
};

// Initiate app
init();