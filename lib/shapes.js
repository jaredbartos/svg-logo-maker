// Create Shape class constructor
class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  };

  setText(input) {
    this.text = input;
  };

  setTextColor(input) {
    this.textColor = input;
  };

  setShapeColor(input) {
    this.shapeColor = input;
  };

  renderText() {
    return `<text x="150" y="120" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  };
};

// Create Triangle class constructor
class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  };

  renderShape() {
    return `<polygon points="150, 0 300, 200 0, 200" fill="${this.shapeColor}" />`
  };

  renderText() {
    return `<text x="150" y="170" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  };
}

// Create Circle class constructor
class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  };

  renderShape() {
    return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />`
  };
}

// Create Square class constructor
class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  };

  renderShape() {
    return `<rect x="0" y="0" width="300" height="200" fill="${this.shapeColor}" />`
  };
}

// Export modules
module.exports = {
  Shape,
  Triangle,
  Circle,
  Square,
};