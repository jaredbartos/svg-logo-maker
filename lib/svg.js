// Import required modules
const Shapes = require('./shapes');
const Triangle = Shapes.Triangle;
const Circle = Shapes.Circle;
const Square = Shapes.Square;

// Function to create class based on shape type input
const classCreation = (data) => {
  let shape
  if (data.shape === 'Circle') {
    shape = new Circle(data.text, data.textColor, data.shapeColor);
  } else if (data.shape === 'Triangle') {
    shape = new Triangle(data.text, data.textColor, data.shapeColor);
  } else {
    shape = new Square(data.text, data.textColor, data.shapeColor);
  }

  return shape;
};

// Function used to compile SVG contents using shape parameters
const compileSVG = (renderedShape, renderedText) => {
  const svg = `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

${renderedShape}

${renderedText}

</svg>`

return svg;
};

// Function to generate the SVG content
// For use in index.js file
const generateSVG = (data) => {
  const shape = classCreation(data);
  const svg = compileSVG(shape.renderShape(), shape.renderText());

  return svg;
};

// Export generateSVG module
module.exports = generateSVG;