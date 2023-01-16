function getAverageColor(image) {
  var r=0, g=0, b=0, count = 0, canvas, ctx, imageData, data, i, n;
  canvas = document.createElement('canvas');
  ctx = canvas.getContext("2d");
  canvas.width = image.width;
  canvas.height = image.height;
  ctx.drawImage(image, 0, 0);
  imageData = ctx.getImageData(0, 0, image.width, image.height);
  data = imageData.data;
  for(i = 0, n = data.length; i < n; i += 4) {
    ++count;
    r += data[i];
    g += data[i+1];
    b += data[i+2];
  }
  r = ~~(r/count);
  g = ~~(g/count);
  b = ~~(b/count);
  return [r, g, b];
}
function rgbToHex(arr) {
  return "#" + ((1 << 24) + (arr[0] << 16) + (arr[1] << 8) + arr[2]).toString(16).slice(1);
}
var cover = document.getElementById("cover");
var music_player = document.getElementById("music-player");
var colorRGB = getAverageColor(cover);
var colorHex = rgbToHex(colorRGB);
music_player.style.backgroundColor = colorHex;
console.log(colorHex);