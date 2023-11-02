// Import required modules
const Shapes = require('./shapes');
const Shape = Shapes.Shape;
const Triangle = Shapes.Triangle;
const Circle = Shapes.Circle;
const Square = Shapes.Square;

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

  // Test setText method
  describe('setText() method', () => {
    it('should set text parameter', () => {
      const shape = new Shape();
      shape.setText('SVG');
      expect(shape.text).toBe('SVG');
    });
  });

  // Test setTextColor method
  describe('setTextColor() method', () => {
    it('should set textColor parameter', () => {
      const shape = new Shape();
      shape.setTextColor('white');
      expect(shape.textColor).toBe('white');
    });
  });

  // Test setShapeColor method
  describe('setShapeColor() method', () => {
    it('should set shapeColor parameter', () => {
      const shape = new Shape();
      shape.setShapeColor('blue');
      expect(shape.shapeColor).toBe('blue');
    });
  });

  // Test renderText method
  describe('renderText() method', () => {
    it('should return rendered text element', () => {
      const shape = new Shape();
      shape.setText('SVG');
      shape.setTextColor('white');
      expect(shape.renderText()).toBe(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>`);
    });
  });
});

// Test Triangle class constructor
describe('Triangle', () => {
  // Test new instance of Triangle class
  describe('Instantiate', () => {
    it('should be an instance of Triangle class', () => {
      const triangle = new Triangle();
      expect(triangle).toBeInstanceOf(Triangle);
    });
  });

  // Test text parameter initialization
  describe('Initialize text parameter', () => {
    it('should set text parameter properly', () => {
      const text = 'SVG';
      const triangle = new Triangle(text);
      expect(triangle.text).toBe(text);
    });
  });
  
  // Test textColor parameter initialization
  describe('Initialize textColor parameter', () => {
    it('should set textColor parameter properly', () => {
      const textColor = 'white';
      const triangle = new Triangle('SVG', textColor);
      expect(triangle.textColor).toBe(textColor);
    });
  });

  // Test shapeColor parameter initialization
  describe('Initialize shapeColor parameter', () => {
    it('should set shapeColor parameter properly', () => {
      const shapeColor = 'blue';
      const triangle = new Triangle('SVG', 'white', shapeColor);
      expect(triangle.shapeColor).toBe(shapeColor);
    });
  });

  // Test renderShape method
  describe('renderShape() method', () => {
    it('should return rendered shape element', () => {
      const triangle = new Triangle();
      triangle.setShapeColor('blue');
      expect(triangle.renderShape()).toBe(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`);
    });
  });
});

// Test Circle class constructor
describe('Circle', () => {
  // Test new instance of Circle class
  describe('Instantiate', () => {
    it('should be an instance of Circle class', () => {
      const circle = new Circle();
      expect(circle).toBeInstanceOf(Circle);
    });
  });

  // Test text parameter initialization
  describe('Initialize text parameter', () => {
    it('should set text parameter properly', () => {
      const text = 'SVG';
      const circle = new Circle(text);
      expect(circle.text).toBe(text);
    });
  });
  
  // Test textColor parameter initialization
  describe('Initialize textColor parameter', () => {
    it('should set textColor parameter properly', () => {
      const textColor = 'white';
      const circle = new Circle('SVG', textColor);
      expect(circle.textColor).toBe(textColor);
    });
  });

  // Test shapeColor parameter initialization
  describe('Initialize shapeColor parameter', () => {
    it('should set shapeColor parameter properly', () => {
      const shapeColor = 'blue';
      const circle = new Circle('SVG', 'white', shapeColor);
      expect(circle.shapeColor).toBe(shapeColor);
    });
  });

  // Test renderShape method
  describe('renderShape() method', () => {
    it('should return rendered shape element', () => {
      const circle = new Circle();
      circle.setShapeColor('blue');
      expect(circle.renderShape()).toBe(`<circle cx="150" cy="100" r="80" fill="blue" />`);
    });
  });
});

// Test Square class constructor
describe('Square', () => {
  // Test new instance of Square class
  describe('Instantiate', () => {
    it('should be an instance of Square class', () => {
      const square = new Square();
      expect(square).toBeInstanceOf(Square);
    });
  });

  // Test text parameter initialization
  describe('Initialize text parameter', () => {
    it('should set text parameter properly', () => {
      const text = 'SVG';
      const square = new Square(text);
      expect(square.text).toBe(text);
    });
  });
  
  // Test textColor parameter initialization
  describe('Initialize textColor parameter', () => {
    it('should set textColor parameter properly', () => {
      const textColor = 'white';
      const square = new Square('SVG', textColor);
      expect(square.textColor).toBe(textColor);
    });
  });

  // Test shapeColor parameter initialization
  describe('Initialize shapeColor parameter', () => {
    it('should set shapeColor parameter properly', () => {
      const shapeColor = 'blue';
      const square = new Square('SVG', 'white', shapeColor);
      expect(square.shapeColor).toBe(shapeColor);
    });
  });

  // Test renderShape method
  describe('renderShape() method', () => {
    it('should return rendered shape element', () => {
      const square = new Square();
      square.setShapeColor('blue');
      expect(square.renderShape()).toBe(`<rect x="70" y="20" width="160" height="160" fill="blue" />`);
    });
  });
});