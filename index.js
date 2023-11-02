// Import required modules
const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const generateSVG = require('./lib/svg');
const questions = require('./lib/questions');

const writeSVG = (fileName, data) => {
  writeFile(fileName, generateSVG(data), (err) => {
    if (err) throw err;
  })
    .then(() => {
      console.log('Generated "logo.svg"');
  })
};

const init = () => {
  inquirer.prompt(questions)
    .then((answers) => {
      writeSVG('logo.svg', answers);
  });
};

init();