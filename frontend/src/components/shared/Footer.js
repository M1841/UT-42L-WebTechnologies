app.component("app-footer", {
  data() {
    return {
      footer: undefined,
      darkMode: true,
    };
  },
  mounted() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      this.darkMode = savedTheme === "dark";
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      this.darkMode = true;
      document.documentElement.setAttribute("data-theme", "dark");
    }
    const locale = window.i18n.locale;
    fetch("/api/shared/footer?lang=" + locale).then((res) => {
      res.json().then((json) => {
        this.footer = json;
      });
    });
    window.addEventListener("storage", this.handleStorageChange);
    window.addEventListener("themeChanged", this.handleCustomEvent);
  },
  beforeUnmount() {
    window.removeEventListener("storage", this.handleStorageChange);
    window.removeEventListener("themeChanged", this.handleCustomEvent);
  },
  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode;
      const theme = this.darkMode ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
      window.dispatchEvent(new CustomEvent("themeChanged", { detail: { theme } }));
    },
    handleStorageChange(e) {
      if (e.key === "theme") {
        this.darkMode = e.newValue === "dark";
      }
    },
    handleCustomEvent(e) {
      this.darkMode = e.detail.theme === "dark";
    },
    toggleLanguage() {
      const newLocale = window.i18n.locale === "en" ? "ro" : "en";
      window.i18n.setLocale(newLocale);
      location.reload();
    },
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
      <div style="text-align: center; margin-bottom: 0.5rem;">
        <button class="theme-toggle" @click="toggleTheme">
          <i :class="darkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
          {{ darkMode ? $i18n.t('light') : $i18n.t('dark') }}
        </button>
        <button class="theme-toggle" @click="toggleLanguage" style="margin-left: 0.5rem;">
          <i class="fas fa-language"></i>
          {{ $i18n.locale === 'en' ? 'RO' : 'EN' }}
        </button>
      </div>
      <span>{{ $i18n.t('last_updated') }}: {{ footer.lastUpdated }}</span>
    </footer>
  `,
});
