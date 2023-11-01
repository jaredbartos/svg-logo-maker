// Import required modules
const Shapes = require('../lib/shapes');
const Triangle = Shapes.Triangle;
const Circle = Shapes.Circle;
const Square = Shapes.Square;

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

const compileSVG = (renderedShape, renderedText) => {
  const svg = `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<rect width="100%" height="100%" fill="white" />

${renderedShape}

${renderedText}

</svg>`

return svg;
};

const generateSVG = (data) => {
  const shape = classCreation(data);
  const svg = compileSVG(shape.renderShape(), shape.renderText());

  return svg;
};

module.exports = generateSVG;