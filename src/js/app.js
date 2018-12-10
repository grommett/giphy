const GIF_COUNT = 9;
const GIF_RATING = 'G';

export default function app(service, gifGrid) {
  return {
    async init(event) {
      const el = event.target;
      this.grid = gifGrid(el);
      const gifData = await service.getGifs(GIF_COUNT, GIF_RATING);
      this.grid.renderGifs(gifData);

      document.body.addEventListener('PageChange', this);
    },

    async onPageChange(event) {
      const page = event.detail.page;
      const gifData = await service.getGifs(GIF_COUNT, GIF_RATING, (page - 1) * GIF_COUNT);
      this.grid.updateGifs(gifData);
    }
  };
}
