app.component("app-projects", {
  data() {
    return {
      projects: undefined,
      visibleIndex: 0,
    };
  },
  methods: {
    next() {
      if (this.visibleIndex === this.projects.length - 1) {
        this.visibleIndex = 0;
      } else {
        this.visibleIndex++;
      }
    },
    prev() {
      if (this.visibleIndex === 0) {
        this.visibleIndex = this.projects.length - 1;
      } else {
        this.visibleIndex--;
      }
    },
  },
  mounted() {
    fetch("/api/home/projects").then((res) => {
      res.json().then((json) => {
        this.projects = json;

        if (this.projects.length > 1) {
          setInterval(() => {
            this.next();
          }, 5000);
        }
      });
    });
  },
  template: /* html */ `
    <section class="projects" v-if="projects">
      <h1>Representative Projects</h1>
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
