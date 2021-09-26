const $input = document.getElementById('input');
const $preview = document.getElementById('preview');
const previewCtx = $preview.getContext('2d');
const worker = new Worker('./worker.js');


/** Sends image data to Worker to apply a filter. */
function applyFilter() {
  const imageData = previewCtx.getImageData(0, 0, $preview.width, $preview.height);
  worker.postMessage(imageData, [imageData.data.buffer]);
}

// Getting data back from web worker
worker.addEventListener('message', (d) => {
  const imageData = d.data;
  previewCtx.putImageData(imageData, 0, 0);
});


$input.addEventListener('change', (e) => {
  const file = e.target.files[0];

  createImageBitmap(file).then((bitmap) => {
      $preview.height = bitmap.height;
      $preview.width = bitmap.width;
      previewCtx.drawImage(bitmap, 0, 0);
      applyFilter();
  });
});
