addEventListener('resize', function() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});