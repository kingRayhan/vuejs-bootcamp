<template>
  <div class="app">
    <div class="header"><h1 class="app-title">Vue Notes</h1></div>
    <!-- Editor -->
    <Editor />
    <Filter />
    <!-- Filter -->
    <div class="notes">
      <Note v-for="note in filteredNotes" :key="note.id" :note="note" />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import Editor from "./components/Editor.vue";
import Filter from "./components/Filter.vue";
import Note from "./components/Note.vue";
export default {
  mounted() {
    this.unsubscribe = this.$store.subscribe((_, state) => {
      localStorage.setItem("notes:notes", JSON.stringify(state.notes.notes));
    });
  },
  components: {
    Editor,
    Filter,
    Note,
  },
  computed: {
    ...mapGetters("notes", ["filteredNotes"]),
  },
};
</script>
