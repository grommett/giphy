export function createGif(src) {
  const img = document.createElement('img');
  img.src = src;

  return img;
}

export function updateGif(img, url) {
  img.src = url;
}
