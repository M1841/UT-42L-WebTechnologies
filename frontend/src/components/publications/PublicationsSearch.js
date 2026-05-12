app.component("app-publications-search", {
  props: {
    publications: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      searchQuery: "",
      filterTitle: true,
      filterAuthor: true,
      filterVenue: true,
      minYear: 2000,
      maxYear: 2026,
      rangeMin: 2000,
      rangeMax: 2026,
    };
  },
  computed: {
    filteredPublications() {
      return this.publications.filter((pub) => {
        const query = this.searchQuery.toLowerCase();
        if (!query && pub.year >= this.rangeMin && pub.year <= this.rangeMax)
          return true;
        if (!query) return false;

        let matches = false;
        if (this.filterTitle && pub.title.toLowerCase().includes(query)) {
          matches = true;
        }
        if (
          this.filterAuthor &&
          pub.authors.some((author) => author.toLowerCase().includes(query))
        ) {
          matches = true;
        }
        if (this.filterVenue && pub.venue.toLowerCase().includes(query)) {
          matches = true;
        }
        if (matches && pub.year >= this.rangeMin && pub.year <= this.rangeMax) {
          return true;
        }
        return false;
      });
    },
  },
  methods: {
    updateMinYear(event) {
      const value = parseInt(event.target.value);
      this.rangeMin = value;
    },
    updateMaxYear(event) {
      const value = parseInt(event.target.value);
      this.rangeMax = value;
    },
  },
  template: /* html */ `
    <section class="publications-search">
      <h1>Publications</h1>
      <div class="search-container">
        <input
          class="search-input"
          v-model="searchQuery"
          type="text"
          placeholder="Search publications..."
        />
        <div class="filters">
          <div class="filter-checkboxes">
            <label>
              <input type="checkbox" v-model="filterTitle" />
              Title
            </label>
            <label>
              <input type="checkbox" v-model="filterAuthor" />
              Author
            </label>
            <label>
              <input type="checkbox" v-model="filterVenue" />
              Venue
            </label>
          </div>
          <div class="year-filter">
            <label>Year: {{ rangeMin === minYear ? 'Any' : rangeMin }} - {{ rangeMax === maxYear ? 'Any' : rangeMax }}</label>
            <div class="dual-slider">
              <div class="dual-slider-track"></div>
              <div
                class="dual-slider-range"
                :style="{
                  left: ((rangeMin - minYear) / (maxYear - minYear) * 100) + '%',
                  width: ((rangeMax - rangeMin) / (maxYear - minYear) * 100) + '%'
                }"
              ></div>
              <input
                type="range"
                :min="minYear"
                :max="maxYear"
                :value="rangeMin"
                @input="updateMinYear"
              />
              <input
                type="range"
                :min="minYear"
                :max="maxYear"
                :value="rangeMax"
                @input="updateMaxYear"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="results">
        <div class="result-item" v-for="pub in filteredPublications">
          <h3>{{ pub.title }}</h3>
          <p class="authors">{{ pub.authors.join('; ') }}</p>
          <p class="venue">{{ pub.venue }}</p>
          <a href="#" class="read-more">Read more</a>
        </div>
        <div v-if="filteredPublications.length === 0" class="no-results">
          No publications found
        </div>
      </div>
    </section>
  `,
});
