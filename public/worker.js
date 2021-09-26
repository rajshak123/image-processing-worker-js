
addEventListener('message', (d) => {
  const imageData = d.data;

  console.log(imageData,d)
  for (i = 0; i < imageData.data.length; i += 4) {
    let count = imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2];
    let colour = 0;
    if (count > 383) colour = 255;

    imageData.data[i] = colour;
    imageData.data[i + 1] = colour;
    imageData.data[i + 2] = colour;
    imageData.data[i + 3] = 255;
  }
  
  postMessage(imageData, [imageData.data.buffer])
});
