app.component("app-team-cards", {
  data() {
    return {
      team: undefined,
    };
  },
  mounted() {
    fetch("/api/team?lang=" + window.i18n.locale).then((res) => {
      res.json().then((json) => {
        this.team = json;
      });
    });
  },
  template: /* html */ `
    <section class="team" v-if="team">
      <h1>{{ $i18n.t('our_team') }}</h1>
      <div class="team-groups">
        <app-team-card-large
          v-if="team.director"
          class="team-group"
          :members="[team.director]"
          :header="$i18n.t('director')"
          :title="$i18n.t('prof_eng')"
          has-phd
        ></app-team-card-large>

        <app-team-card-large
          v-if="team.professors"
          class="team-group"
          :members="team.professors"
          :header="$i18n.t('professors')"
          :title="$i18n.t('prof_eng')"
          has-phd
        ></app-team-card-large>

        <app-team-card-large
          v-if="team.phdStudents"
          class="team-group"
          :members="team.phdStudents"
          :header="$i18n.t('phd_students')"
          :title="$i18n.t('eng')"
        ></app-team-card-large>
      </div>
    </section>
  `,
});
