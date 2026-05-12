app.component("app-team-director", {
  data() {
    return {
      director: undefined,
      publications: undefined,
      visibleIndex: 0,
    };
  },
  computed: {
    directorPublications() {
      const lastName = this.director.name.last.toLowerCase();
      const firstInitial = this.director.name.first.charAt(0).toLowerCase();
      return this.publications.filter((pub) => {
        return pub.authors.some((author) => {
          const authorLower = author.toLowerCase();
          return (
            authorLower.includes(lastName) && authorLower.includes(firstInitial)
          );
        });
      });
    },
  },
  methods: {
    incrementIndex() {
      if (this.visibleIndex == this.directorPublications.length - 1) {
        this.visibleIndex = 0;
      } else {
        this.visibleIndex++;
      }
    },
    decrementIndex() {
      if (this.visibleIndex == 0) {
        this.visibleIndex = this.directorPublications.length - 1;
      } else {
        this.visibleIndex--;
      }
    },
  },
  mounted() {
    Promise.all([
      fetch("/api/team").then((res) => res.json()),
      fetch("/api/publications").then((res) => res.json()),
    ]).then(([team, publications]) => {
      this.director = team.director;
      this.publications = publications;

      if (this.directorPublications.length > 1) {
        setInterval(() => {
          this.incrementIndex();
        }, 5000);
      }
    });
  },
  template: /* html */ `
    <section class="director" v-if="director">
      <h1>Director</h1>
      <div class="director-card">
        <img :src="director.image" class="director-image" />
        <div class="director-info">
          <h2>Prof. Eng. {{ director.name.first }} {{ director.name.last }} PhD</h2>
          <div class="director-links">
            <a :href="'mailto:' + director.links.email" class="link-btn fas fa-envelope"></a>
            <a :href="director.links.linkedin" class="link-btn fab fa-linkedin"></a>
            <a :href="director.links.googleScholar" class="link-btn fab fa-google"></a>
          </div>
          <div class="director-publications" v-if="directorPublications.length > 0">
            <h3>Recent Publications</h3>
            <div class="publication-item">
              <h4>{{ directorPublications[visibleIndex].title }}</h4>
              <p class="authors">{{ directorPublications[visibleIndex].authors.join('; ') }}</p>
              <p class="venue">{{ directorPublications[visibleIndex].venue }}</p>
            </div>
            <div class="publication-nav">
              <button class="nav-btn" @click="decrementIndex">&lt;</button>
              <span class="page-indicator">{{ visibleIndex + 1 }} / {{ directorPublications.length }}</span>
              <button class="nav-btn" @click="incrementIndex">&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
});
