// Import required modules
const generateSVG = require('../lib/svg');

// Test generateSVG function to confirm it successfully renders the SVG contents
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

<circle cx="150" cy="100" r="100" fill="blue" />

<text x="150" y="120" font-size="80" text-anchor="middle" fill="white">SVG</text>

</svg>`);
  });
});