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
    return `<text x="150" y="115" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  }
};

// Create Triangle class constructor
class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  renderShape() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
  }
}

// Create Circle class constructor
class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  renderShape() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
  }
}

// Create Square class constructor
class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  renderShape() {
    return `<rect x="70" y="20" width="160" height="160" fill="${this.shapeColor}" />`
  }
}

// Export modules
module.exports = {
  Shape,
  Triangle,
  Circle,
  Square,
};