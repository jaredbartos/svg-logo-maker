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

module.exports = { compileSVG }