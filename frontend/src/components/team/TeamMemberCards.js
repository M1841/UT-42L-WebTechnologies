app.component("app-team-member-cards", {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      members: undefined,
      title: undefined,
      memberTitle: undefined,
      hasPhd: false,
    };
  },
  mounted() {
    fetch("/api/team").then((res) => {
      res.json().then((json) => {
        if (this.type === "professors") {
          this.members = json.professors;
          this.title = "Professors";
          this.memberTitle = "Prof. Eng.";
          this.hasPhd = true;
        } else if (this.type === "phdstudents") {
          this.members = json.phdStudents;
          this.title = "PhD Students";
          this.memberTitle = "Eng.";
        }
      });
    });
  },
  template: /* html */ `
    <section class="team-member-cards" v-if="members">
      <h1>{{ title }}</h1>
      <div class="members-list">
        <div class="member-card" v-for="member in members" :key="member.name.first + member.name.last">
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
