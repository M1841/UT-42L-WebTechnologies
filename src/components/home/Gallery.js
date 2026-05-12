app.component("app-gallery", {
  data() {
    return {
      gallery: {},
    };
  },
  mounted() {
    fetch("/api/home/gallery").then((res) => {
      res.json().then((json) => {
        this.gallery = json;
      });
    });
  },
  template: /* html */ `
    <section class="gallery">
      <img v-for="image in gallery.images" :src="image" />
    </section>
  `,
});
