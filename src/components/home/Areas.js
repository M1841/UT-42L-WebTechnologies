app.component("app-areas", {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {},
  template: `
    <section>
      <h1>Areas of Expertise</h1>
      <div v-for="area in data.areas">
        <img :src="area.image" />
        <h2>{{ area.title }}</h2>
        <ul>
          <li v-for="paragraph in area.paragraphs">
            {{ paragraph }}
          </li>
        </ul>
      </div>
    </section>
  `,
});
