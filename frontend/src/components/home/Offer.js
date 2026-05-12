app.component("app-offer", {
  data() {
    return {
      offer: {},
    };
  },
  mounted() {
    fetch("/api/home/offer").then((res) => {
      res.json().then((json) => {
        this.offer = json;
      });
    });
  },
  template: /* html */ `
    <section class="offer">
      <h1>The offer addressed to the economic environment</h1>
      <div class="offer-list">
        <div class="offer-item" v-for="(issue, index) in offer.issues" :class="{ 'even': index % 2 === 1 }">
          <img src=" " />
          <div class="offer-content">
            <h3>{{ issue.title }}</h3>
            <ul>
              <li v-for="paragraph in issue.paragraphs">
                {{ paragraph }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
});
