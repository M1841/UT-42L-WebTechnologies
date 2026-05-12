app.component("app-footer", {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  template: /* html */ `
    <footer class="footer">
      <div class="footer-items">
        <div class="footer-item" :class="{
          'top-left': $index === 0,
          'top-right': $index === 1,
          'bottom-left': $index === 2,
          'bottom-right': $index === 3
        }" v-for="(item, $index) in data.items">
          <h2>{{ item.title }}</h2>
          <p v-for="paragraph of item.paragraphs">
            {{ paragraph }}
          </p>
        </div>
      </div>
      <span>Last updated: {{ data.lastUpdated }}</span>
    </footer>
  `,
});
