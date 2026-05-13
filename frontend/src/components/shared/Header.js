app.component("app-header", {
  data() {
    return {
      links: undefined,
    };
  },
  mounted() {
    fetch("/api/shared/header?lang=" + window.i18n.locale).then((res) => {
      res.json().then((json) => {
        this.links = json.links;
      });
    });
  },
  template: /* html */ `
    <header class="header">
      <h2>
        <a href="index.html">DeSy</a>
      </h2>
      <nav v-if="links">
        <a v-for="link of links" :key="link.path" :href="link.path">
          {{ $i18n.t(link.name) }}
        </a>
      </nav>
    </header>
  `,
});
