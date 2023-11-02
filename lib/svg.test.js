// Import required modules
const generateSVG = require('./svg');

describe('generateSVG function', () => {
  it('should successfully generate SVG content', () => {
    const data = {
      shape: 'Circle',
      text: 'SVG',
      textColor: 'white',
      shapeColor: 'blue',
    };
    expect(generateSVG(data)).toBe(`<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<rect width="100%" height="100%" fill="white" />

<circle cx="150" cy="100" r="80" fill="blue" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>`);
  });
});