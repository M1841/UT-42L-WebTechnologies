app.component("app-gallery", {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  template: /* html */ `
    <section class="gallery">
      <img v-for="image in data.images" :src="image" />
    </section>
  `,
});
