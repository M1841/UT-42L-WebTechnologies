app.component("app-footer", {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  template: `
    <footer>
      <div v-for="item in data.items">
        <h2>{{ item.title }}</h2>
        <p v-for="paragraph of item.paragraphs">
          {{ paragraph }}
        </p>
      </div>
      <span>Last updated: {{ data.lastUpdated }}</span>
    </footer>
  `,
});
