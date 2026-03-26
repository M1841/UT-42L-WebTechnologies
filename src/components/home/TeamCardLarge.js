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
  template: `
    <div>
      <p>{{ header }}</p>
      <div>
        <img :src="members[visibleMemberIndex].image" />
        <h3>{{ title }} {{ members[visibleMemberIndex].name.first }} {{ members[visibleMemberIndex].name.last }} {{ hasPhd ? "PhD" : ""}}</h3>
        <div>
          <a>[]</a>
          <a>[]</a>
          <a>[]</a>
        </div>
      </div>
      <div v-if="members.length > 1">
        <button @click="decrementIndex">&lt;</button>
        {{ visibleMemberIndex + 1 }} / {{ members.length }}
        <button @click="incrementIndex">&gt;</button>
      </div>
    </div>
  `,
});
