<template>
  <div class="filter">
    <button @click="$store.commit('notes/filterNote', '')">
      All ({{ count }})
    </button>
    <button
      v-for="color in noteCountByColor"
      :key="color.color"
      :style="{ 'background-color': color.color }"
      @click="$store.commit('filterNote', color.color)"
    >
      {{ color.noteCount }}
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("notes", ["noteCountByColor", "count"]),
  },
};
</script>
