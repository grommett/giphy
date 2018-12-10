export default function pager() {
  return {
    init(event) {
      this.el = event.target;
    },
    onchange(event) {
      const page = event.target.value;
      this.el.dispatchEvent(
        new CustomEvent('PageChange', {
          bubbles: true,
          detail: { page: page }
        })
      );
    }
  };
}
