app.component("app-gallery", {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {},
  template: `
    <section>
      <img v-for="image in data.images" :src="image" />
    </section>
  `,
});
