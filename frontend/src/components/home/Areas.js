app.component("app-areas", {
  data() {
    return {
      areas: undefined,
    };
  },
  mounted() {
    fetch("/api/home/areas?lang=" + window.i18n.locale).then((res) => {
      res.json().then((json) => {
        this.areas = json;
      });
    });
  },
  template: /* html */ `
    <section class="areas" v-if="areas">
      <h1>{{ $i18n.t('areas_of_expertise') }}</h1>
      <div class="areas-list">
        <div class="area-item" v-for="area in areas.areas" :key="area.title">
          <img :src="area.image" />
          <h2>{{ area.title }}</h2>
          <ul>
            <li v-for="paragraph in area.paragraphs" :key="paragraph">
              {{ paragraph }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  `,
});
