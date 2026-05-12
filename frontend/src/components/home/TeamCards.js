app.component("app-team-cards", {
  data() {
    return {
      team: undefined,
    };
  },
  mounted() {
    fetch("/api/team").then((res) => {
      res.json().then((json) => {
        this.team = json;
      });
    });
  },
  template: /* html */ `
    <section class="team" v-if="team">
      <h1>Our Team</h1>
      <div class="team-groups">
        <app-team-card-large
          v-if="team.director"
          class="team-group"
          :members="[team.director]"
          header="Director"
          title="Prof. Eng."
          has-phd
        ></app-team-card-large>

        <app-team-card-large
          v-if="team.professors"
          class="team-group"
          :members="team.professors"
          header="Professors"
          title="Prof. Eng."
          has-phd
        ></app-team-card-large>

        <app-team-card-large
          v-if="team.phdStudents"
          class="team-group"
          :members="team.phdStudents"
          header="PhD Students"
          title="Eng."
        ></app-team-card-large>
      </div>
    </section>
  `,
});
