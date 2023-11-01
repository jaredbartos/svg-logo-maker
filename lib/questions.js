const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter text for logo (up to 3 characters)',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter desired text color (color keyword or hexadecimal number)',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape for the logo',
      choices: [
        'circle',
        'triangle',
        'square',
      ]
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter desired shape color (color keyword or hexadecimal number)',
    },
];

module.exports = questions;