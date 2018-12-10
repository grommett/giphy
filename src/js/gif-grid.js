import { createGif, updateGif } from './gif-renderer.js';

export function gifGrid(el) {
  const images = [];

  return {
    renderGifs(gifData) {
      const fragment = document.createDocumentFragment();
      gifData.forEach(gif => {
        const src = gif.images.fixed_width.url;
        const img = createGif(src);
        images.push(img);
        fragment.appendChild(img);
      });
      el.appendChild(fragment);
    },

    updateGifs(gifData) {
      gifData.forEach((gif, index) => updateGif(images[index], gif.images.fixed_width.url));
    }
  };
}
