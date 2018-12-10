import giphy from './service-giphy.js';

export default {
  getGifs(limit, rating, offset) {
    return giphy(limit, rating, offset);
  }
};
