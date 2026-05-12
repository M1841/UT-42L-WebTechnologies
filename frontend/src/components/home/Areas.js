app.component("app-areas", {
  data() {
    return {
      areas: {},
    };
  },
  mounted() {
    fetch("/api/home/areas").then((res) => {
      res.json().then((json) => {
        this.areas = json;
      });
    });
  },
  template: /* html */ `
    <section class="areas">
      <h1>Areas of Expertise</h1>
      <div class="areas-list">
        <div class="area-item" v-for="area in areas.areas">
          <img :src="area.image" />
          <h2>{{ area.title }}</h2>
          <ul>
            <li v-for="paragraph in area.paragraphs">
              {{ paragraph }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  `,
});
