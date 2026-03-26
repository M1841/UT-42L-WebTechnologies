app.component("app-team-cards", {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  template: `
    <section>
      <h2>Our Team</h2>

      <app-team-card-large
        :members="[data.director]"
        header="Director"
        title="Prof. Eng."
        hasPhd
      ></app-team-card-large>

      <app-team-card-large
        :members="data.professors"
        header="Professors"
        title="Prof. Eng."
        hasPhd
      ></app-team-card-large>

      <app-team-card-large
        :members="data.phdStudents"
        header="PhD Students"
        title="Eng."
      ></app-team-card-large>
    </section>
  `,
});
