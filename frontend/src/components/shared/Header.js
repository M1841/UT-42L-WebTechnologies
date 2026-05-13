app.component("app-header", {
  data() {
    return {
      links: undefined,
      isDark: true,
    };
  },
  mounted() {
    fetch("/api/shared/header?lang=" + window.i18n.locale).then((res) => {
      res.json().then((json) => {
        this.links = json.links;
      });
    });
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      this.isDark = savedTheme === "dark";
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      this.isDark = true;
      document.documentElement.setAttribute("data-theme", "dark");
    }
    window.addEventListener("storage", this.handleStorageChange);
    window.addEventListener("themeChanged", this.handleCustomEvent);
  },
  beforeUnmount() {
    window.removeEventListener("storage", this.handleStorageChange);
    window.removeEventListener("themeChanged", this.handleCustomEvent);
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;
      const theme = this.isDark ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
      window.dispatchEvent(new CustomEvent("themeChanged", { detail: { theme } }));
    },
    handleStorageChange(e) {
      if (e.key === "theme") {
        this.isDark = e.newValue === "dark";
      }
    },
    handleCustomEvent(e) {
      this.isDark = e.detail.theme === "dark";
    },
  },
  template: /* html */ `
    <header class="header">
      <h2 class="logo-container">
        <a href="index.html">
          <img src="data/images/logo.png" alt="DeSy Logo" class="logo">
        </a>
      </h2>
      <nav v-if="links">
        <a v-for="link of links" :key="link.path" :href="link.path">
          {{ $i18n.t(link.name) }}
        </a>
        <button class="theme-toggle" @click="toggleTheme">
          {{ isDark ? '☀️' : '🌙' }}
        </button>
      </nav>
    </header>
  `,
});
