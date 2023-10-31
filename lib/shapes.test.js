// Import required modules
const Shape = require('../lib/shapes');

// Test for new instance of Shape class
describe('Shape', () => {
  describe('Instantiate', () => {
    it('should be an instance of Shape class', () => {
      const shape = new Shape();
      expect(shape).toBeInstanceOf(Shape);
    });
  });

  describe('Initialize text parameter', () => {
    it('should set text parameter properly', () => {
      const text = 'SVG';
      const shape = new Shape(text);
      expect(shape.text).toBe(text);
    });
  });
  
  describe('Initialize textColor parameter', () => {
    it('should set textColor parameter properly', () => {
      const textColor = 'white';
      const shape = new Shape('SVG', textColor);
      expect(shape.textColor).toBe(textColor);
    });
  });

  describe('Initialize shapeColor parameter', () => {
    it('should set shapeColor parameter properly', () => {
      const shapeColor = 'blue';
      const shape = new Shape('SVG', 'white', shapeColor);
      expect(shape.shapeColor).toBe(shapeColor);
    });
  });
});