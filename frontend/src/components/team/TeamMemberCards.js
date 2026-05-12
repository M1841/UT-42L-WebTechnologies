app.component("app-team-member-cards", {
  props: {
    members: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    memberTitle: {
      type: String,
      required: true,
    },
    hasPhd: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  template: /* html */ `
    <section class="team-member-cards">
      <h1>{{ title }}</h1>
      <div class="members-list">
        <div class="member-card" v-for="member in members">
          <img :src="member.image" class="member-image" />
          <div class="member-info">
            <h2>{{ memberTitle }} {{ member.name.first }} {{ member.name.last }} {{ hasPhd ? "PhD" : "" }}</h2>
            <div class="member-links">
              <a :href="member.links.email ? 'mailto:' + member.links.email : '#'" class="link-btn fas fa-envelope"></a>
              <a :href="member.links.linkedin || '#'" class="link-btn fab fa-linkedin"></a>
              <a :href="member.links.googleScholar || '#'" class="link-btn fab fa-google"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
});
