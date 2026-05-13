app.component("app-publications-search", {
  data() {
    return {
      publications: undefined,
      searchQuery: "",
      filterTitle: true,
      filterAuthor: true,
      filterVenue: true,
      minYear: 2016,
      maxYear: 2026,
      rangeMin: 2016,
      rangeMax: 2026,
      searchTimer: null,
    };
  },
  computed: {
    searchParams() {
      const params = new URLSearchParams();
      if (this.searchQuery) params.set("search", this.searchQuery);
      params.set("filterTitle", this.filterTitle);
      params.set("filterAuthor", this.filterAuthor);
      params.set("filterVenue", this.filterVenue);
      params.set("minYear", this.rangeMin);
      params.set("maxYear", this.rangeMax);
      return params.toString();
    },
  },
  watch: {
    searchParams() {
      if (this.searchTimer) clearTimeout(this.searchTimer);
      this.searchTimer = setTimeout(() => this.fetchPublications(), 300);
    },
  },
  methods: {
    fetchPublications() {
      fetch("/api/publications/search?" + this.searchParams).then((res) => {
        res.json().then((json) => {
          this.publications = json;
        });
      });
    },
    updateMinYear(event) {
      const value = parseInt(event.target.value);
      if (value > this.rangeMax) {
        event.target.value = this.rangeMax;
        this.rangeMin = this.rangeMax;
      } else {
        this.rangeMin = value;
      }
    },
    updateMaxYear(event) {
      const value = parseInt(event.target.value);
      if (value < this.rangeMin) {
        event.target.value = this.rangeMin;
        this.rangeMax = this.rangeMin;
      } else {
        this.rangeMax = value;
      }
    },
  },
  mounted() {
    this.fetchPublications();
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
            <label>Year: {{ rangeMin }} - {{ rangeMax }}</label>
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
        <div class="result-item" v-for="pub in publications" :key="pub.title">
          <h3>{{ pub.title }}</h3>
          <p class="authors">{{ pub.authors.join('; ') }}</p>
          <p class="venue">{{ pub.venue }}</p>
          <a :href="pub.link" class="read-more">Read more</a>
        </div>
        <div v-if="publications && publications.length === 0" class="no-results">
          No publications found
        </div>
      </div>
    </section>
  `,
});
