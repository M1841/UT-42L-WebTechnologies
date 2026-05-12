app.component("app-footer", {
  data() {
    return {
      footer: undefined,
    };
  },
  mounted() {
    fetch("/api/shared/footer").then((res) => {
      res.json().then((json) => {
        this.footer = json;
      });
    });
  },
  template: /* html */ `
    <footer class="footer" v-if="footer">
      <div class="footer-items">
        <div class="footer-item" :class="{
          'top-left': $index === 0,
          'top-right': $index === 1,
          'bottom-left': $index === 2,
          'bottom-right': $index === 3
        }" v-for="(item, $index) in footer.items" :key="$index">
          <h2>{{ item.title }}</h2>
          <p v-for="paragraph of item.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
      </div>
      <span>Last updated: {{ footer.lastUpdated }}</span>
    </footer>
  `,
});
