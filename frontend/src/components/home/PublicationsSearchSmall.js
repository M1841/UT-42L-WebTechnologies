app.component("app-publications-search-small", {
  data() {
    return {
      publications: undefined,
      results: [],
    };
  },
  mounted() {
    fetch("/api/publications").then((res) => {
      res.json().then((json) => {
        this.publications = json;
      });
    });
  },
  methods: {
    handleInput(event) {
      const query = event.target.value.toLowerCase();
      if (!query) {
        this.results = [];
      } else {
        this.results = this.publications
          .filter(
            (publication) =>
              publication.title.toLowerCase().includes(query) ||
              publication.authors
                .map((author) => author.toLowerCase())
                .some((author) => author.includes(query)) ||
              publication.venue.toLowerCase().includes(query),
          )
          .slice(0, 5);
      }
    },
  },
  template: /* html */ `
    <section class="publications">
      <h1>Publications</h1>
      <div class="search-container">
        <input class="search-input" @input="handleInput" type="text" placeholder="Search publications..." />
        <div class="results" v-if="results.length > 0">
          <div class="result-item" v-for="result in results" :key="result.title">
            <h3>{{ result.title }}</h3>
            <p class="authors">{{ result.authors.join('; ') }}</p>
            <p class="venue">{{ result.venue }}</p>
            <a href="#" class="read-more">Read more</a>
          </div>
          <a class="view-more" href="publications.html">View more</a>
        </div>
      </div>
    </section>
  `,
});
