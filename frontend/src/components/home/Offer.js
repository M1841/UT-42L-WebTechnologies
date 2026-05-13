app.component("app-offer", {
  data() {
    return {
      offer: undefined,
    };
  },
  mounted() {
    fetch("/api/home/offer?lang=" + window.i18n.locale).then((res) => {
      res.json().then((json) => {
        this.offer = json;
      });
    });
  },
  template: /* html */ `
    <section class="offer" v-if="offer">
      <h1>{{ $i18n.t('offer_title') }}</h1>
      <div class="offer-list">
        <div class="offer-item" v-for="(issue, index) in offer.issues" :key="index" :class="{ 'even': index % 2 === 1 }">
          <img :src="issue.img" />
          <div class="offer-content">
            <h3>{{ issue.title }}</h3>
            <ul>
              <li v-for="paragraph in issue.paragraphs" :key="paragraph">
                {{ paragraph }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
});
