app.component("app-header", {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  template: /* html */ `
    <header class="header">
      <h2>
        <a href="index.html">DeSy</a>
      </h2>
      <nav>
        <a v-for="link of data.links" :href="link.path">
          {{ link.name }}
        </a>
      </nav>
    </header>
  `,
});
