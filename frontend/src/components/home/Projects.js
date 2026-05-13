app.component("app-projects", {
  data() {
    return {
      projects: undefined,
      visibleIndex: 0,
      timer: null,
    };
  },
  methods: {
    next() {
      if (this.visibleIndex === this.projects.length - 1) {
        this.visibleIndex = 0;
      } else {
        this.visibleIndex++;
      }
      this.resetTimer();
    },
    prev() {
      if (this.visibleIndex === 0) {
        this.visibleIndex = this.projects.length - 1;
      } else {
        this.visibleIndex--;
      }
      this.resetTimer();
    },
    startTimer() {
      if (this.projects && this.projects.length > 1) {
        this.timer = setInterval(() => {
          if (this.visibleIndex === this.projects.length - 1) {
            this.visibleIndex = 0;
          } else {
            this.visibleIndex++;
          }
        }, 5000);
      }
    },
    resetTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.startTimer();
      }
    },
  },
  mounted() {
    fetch("/api/home/projects?lang=" + window.i18n.locale).then((res) => {
      res.json().then((json) => {
        this.projects = json;
        this.$nextTick(() => {
          this.startTimer();
        });
      });
    });
  },
  beforeUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  template: /* html */ `
    <section class="projects" v-if="projects">
      <h1>{{ $i18n.t('representative_projects') }}</h1>
      <div class="project-carousel">
        <div class="project-card">
          <img :src="projects[visibleIndex].image" />
          <div class="project-info">
            <span class="project-year">{{ projects[visibleIndex].year }}</span>
            <h3>{{ projects[visibleIndex].name }}</h3>
            <p>{{ projects[visibleIndex].description }}</p>
          </div>
        </div>
        <div class="project-nav" v-if="projects.length > 1">
          <button class="nav-btn" @click="prev">&lt;</button>
          <span class="page-indicator">{{ visibleIndex + 1 }} / {{ projects.length }}</span>
          <button class="nav-btn" @click="next">&gt;</button>
        </div>
      </div>
    </section>
  `,
});
