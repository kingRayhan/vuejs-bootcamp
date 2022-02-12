<template>
  <div class="note" :style="{ 'background-color': note.color }">
    <div>
      <h3 class="title">{{ note.title }}</h3>
      <p>{{ note.desc }}</p>
    </div>
    <p class="time">{{ time }}</p>
    <div class="buttons"><button @click="remove" class="delete">×</button></div>
  </div>
</template>
<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
export default {
  props: ["note"],
  computed: {
    time() {
      return dayjs(this.note.created_at).fromNow();
    },
  },
  methods: {
    remove() {
      this.$store.commit("deleteNote", this.note.id);
    },
  },
};
</script>
