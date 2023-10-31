// Import required modules
const Shape = require('../lib/shapes');

// Test Shape class constructor
describe('Shape', () => {
  // Test new instance of Shape class
  describe('Instantiate', () => {
    it('should be an instance of Shape class', () => {
      const shape = new Shape();
      expect(shape).toBeInstanceOf(Shape);
    });
  });

  // Test text parameter initialization
  describe('Initialize text parameter', () => {
    it('should set text parameter properly', () => {
      const text = 'SVG';
      const shape = new Shape(text);
      expect(shape.text).toBe(text);
    });
  });
  
  // Test textColor parameter initialization
  describe('Initialize textColor parameter', () => {
    it('should set textColor parameter properly', () => {
      const textColor = 'white';
      const shape = new Shape('SVG', textColor);
      expect(shape.textColor).toBe(textColor);
    });
  });

  // Test shapeColor parameter initialization
  describe('Initialize shapeColor parameter', () => {
    it('should set shapeColor parameter properly', () => {
      const shapeColor = 'blue';
      const shape = new Shape('SVG', 'white', shapeColor);
      expect(shape.shapeColor).toBe(shapeColor);
    });
  });
});