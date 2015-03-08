(function() {
  var button, canvas, content, contentArea, itemIndicator, productImage;

  canvas = new Layer({
    width: 640,
    height: 1136,
    backgroundColor: '#FFFFFF',
    scale: 0.5
  });

  contentArea = new Layer({
    superLayer: canvas,
    width: 640,
    height: canvas.height,
    backgroundColor: '#ffffff'
  });

  contentArea.scroll = true;

  productImage = new Layer({
    superLayer: contentArea,
    width: 640,
    height: 378,
    backgroundColor: '#666666'
  });

  itemIndicator = new Layer({
    superLayer: productImage,
    width: 60,
    height: 20,
    midX: productImage.midX,
    maxY: productImage.maxY - 20,
    borderRadius: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  });

  button = new Layer({
    superLayer: canvas,
    width: 640,
    height: 80,
    maxY: canvas.maxY,
    backgroundColor: '#000000'
  });

  button.html = "Add to cart";

  button.style = {
    'text-align': 'center',
    'padding': '20px'
  };

  canvas.center();

  content = new Layer({
    superLayer: contentArea,
    y: productImage.height,
    width: canvas.width,
    height: canvas.height,
    backgroundColor: '#CDCDCD'
  });

}).call(this);
