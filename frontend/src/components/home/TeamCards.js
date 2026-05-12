app.component("app-team-cards", {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  template: /* html */ `
    <section class="team">
      <h1>Our Team</h1>
      <div class="team-groups">
        <app-team-card-large
          class="team-group"
          :members="[data.director]"
          header="Director"
          title="Prof. Eng."
          has-phd
        ></app-team-card-large>

        <app-team-card-large
          class="team-group"
          :members="data.professors"
          header="Professors"
          title="Prof. Eng."
          has-phd
        ></app-team-card-large>

        <app-team-card-large
          class="team-group"
          :members="data.phdStudents"
          header="PhD Students"
          title="Eng."
        ></app-team-card-large>
      </div>
    </section>
  `,
});
