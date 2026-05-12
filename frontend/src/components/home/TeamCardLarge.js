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
    };
  },
  methods: {
    incrementIndex() {
      if (this.visibleMemberIndex == this.members.length - 1) {
        this.visibleMemberIndex = 0;
      } else {
        this.visibleMemberIndex++;
      }
    },
    decrementIndex() {
      if (this.visibleMemberIndex == 0) {
        this.visibleMemberIndex = this.members.length - 1;
      } else {
        this.visibleMemberIndex--;
      }
    },
  },
  mounted() {
    if (this.members.length > 1) {
      setInterval(() => {
        this.incrementIndex();
      }, 5000);
    }
  },
  template: /* html */ `
    <div class="team-card-large">
      <p class="team-header">{{ header }}</p>
      <div class="member-display">
        <img class="member-image" :src="members[visibleMemberIndex].image" />
        <h3>{{ title }} {{ members[visibleMemberIndex].name.first }} {{ members[visibleMemberIndex].name.last }} {{ hasPhd ? "PhD" : ""}}</h3>
        <div class="member-links">
          <a :href="'mailto:' + members[visibleMemberIndex].links.email" class="link-btn fas fa-envelope"></a>
          <a :href="members[visibleMemberIndex].links.linkedin" class="link-btn fab fa-linkedin"></a>
          <a :href="members[visibleMemberIndex].links.googleScholar" class="link-btn fab fa-google"></a>
        </div>
      </div>
      <div class="member-nav" v-if="members.length > 1">
        <button class="nav-btn" @click="decrementIndex">&lt;</button>
        <span class="page-indicator">{{ visibleMemberIndex + 1 }} / {{ members.length }}</span>
        <button class="nav-btn" @click="incrementIndex">&gt;</button>
      </div>
    </div>
  `,
});
