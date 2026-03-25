app.component("app-header", {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {},
  template: `
    <header>
      <h2>
        <a href="/">DeSy</a>
      </h2>
      <nav>
        <a v-for="link of data.links" :href="link.path">
          {{ link.name }}
        </a>
      </nav>
    </header>
  `,
});
