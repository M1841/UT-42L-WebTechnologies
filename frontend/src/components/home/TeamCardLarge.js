app.component("app-team-card-large", {
  props: {
    members: {
      type: Object,
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    hasPhd: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      visibleMemberIndex: 0,
      timer: null,
    };
  },
  methods: {
    incrementIndex(manual = false) {
      if (this.visibleMemberIndex == this.members.length - 1) {
        this.visibleMemberIndex = 0;
      } else {
        this.visibleMemberIndex++;
      }
      if (manual) this.resetTimer();
    },
    decrementIndex() {
      if (this.visibleMemberIndex == 0) {
        this.visibleMemberIndex = this.members.length - 1;
      } else {
        this.visibleMemberIndex--;
      }
      this.resetTimer();
    },
    startTimer() {
      if (this.members.length > 1) {
        this.timer = setInterval(() => {
          this.incrementIndex();
        }, 5000);
      }
    },
    stopTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    resetTimer() {
      this.stopTimer();
      this.startTimer();
    },
  },
  mounted() {
    this.startTimer();
  },
  beforeUnmount() {
    this.stopTimer();
  },
  template: /* html */ `
    <div class="team-card-large">
      <p class="team-header">{{ header }}</p>
      <div class="member-display">
        <img class="member-image" :src="members[visibleMemberIndex].image ?? 'https://i.pinimg.com/474x/27/5f/99/275f99923b080b18e7b474ed6155a17f.jpg?nii=t'" />
        <h3>{{ title }} {{ members[visibleMemberIndex].name.first }} {{ members[visibleMemberIndex].name.last }} {{ hasPhd ? $i18n.t('phd') : ""}}</h3>
        <div class="member-links">
          <a v-if="members[visibleMemberIndex].links.email" :href="'mailto:' + members[visibleMemberIndex].links.email" class="link-btn fas fa-envelope"></a>
          <a v-if="members[visibleMemberIndex].links.linkedin" :href="members[visibleMemberIndex].links.linkedin" class="link-btn fab fa-linkedin"></a>
          <a v-if="members[visibleMemberIndex].links.googleScholar" :href="members[visibleMemberIndex].links.googleScholar" class="link-btn fab fa-google"></a>
        </div>
      </div>
      <div class="member-nav" v-if="members.length > 1">
        <button class="nav-btn" @click="decrementIndex">&lt;</button>
        <span class="page-indicator">{{ visibleMemberIndex + 1 }} / {{ members.length }}</span>
        <button class="nav-btn" @click="incrementIndex(true)">&gt;</button>
      </div>
    </div>
  `,
});
