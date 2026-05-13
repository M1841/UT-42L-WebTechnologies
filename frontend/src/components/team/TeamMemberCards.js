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
          <img :src="member.image ?? 'https://i.pinimg.com/474x/27/5f/99/275f99923b080b18e7b474ed6155a17f.jpg?nii=t'" class="member-image" />
          <div class="member-info">
            <h2>{{ memberTitle }} {{ member.name.first }} {{ member.name.last }} {{ hasPhd ? "PhD" : "" }}</h2>
            <div class="member-links">
              <a v-if="member.links.email" :href="'mailto:' + member.links.email" class="link-btn fas fa-envelope"></a>
              <a v-if="member.links.linkedin" :href="member.links.linkedin" class="link-btn fab fa-linkedin"></a>
              <a v-if="member.links.googleScholar" :href="member.links.googleScholar" class="link-btn fab fa-google"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
});
