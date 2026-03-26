app.component("app-publications-search-small", {
  props: {
    publications: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      results: [],
    };
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
  template: `
    <section>
      <h2>Publications</h2>
      <input @input="handleInput" type="text" />
      <a href="publications.html">View more</a>
      <div v-if="results.length > 0">
        <div v-for="result in results">
          <h3>{{ result.title }}</h3>
        </div>
      </div>
    </section>
  `,
});
