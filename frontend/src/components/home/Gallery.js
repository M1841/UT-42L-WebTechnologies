app.component("app-gallery", {
  data() {
    return {
      gallery: undefined,
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
    <section class="gallery" v-if="gallery">
      <img v-for="image in gallery.images" :key="image" :src="image" />
    </section>
  `,
});
