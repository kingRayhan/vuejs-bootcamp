<template>
  <form class="contextbox" @submit.prevent="handleSubmit">
    <input type="text" placeholder="Title" v-model="note.title" />
    <textarea rows="8" placeholder="Description" v-model="note.desc"></textarea>
    <div class="controls">
      <div class="colors">
        <span
          v-for="color in colors"
          :key="color"
          :style="{
            backgroundColor: color,
            border: note.color === color ? '1px solid #333' : '',
          }"
          @click="note.color = color"
        ></span>
      </div>
      <button>Add</button>
    </div>
  </form>
</template>

<script>
import { mapState } from "vuex";
import { v4 } from "uuid";
export default {
  data() {
    return {
      note: {
        title: "",
        desc: "",
        color: null,
      },
    };
  },
  computed: {
    ...mapState("notes", ["colors"]),
  },
  methods: {
    handleSubmit() {
      this.note.id = v4();
      this.note.created_at = new Date();
      this.$store.commit("notes/addNote", this.note);

      this.note = {
        title: "",
        desc: "",
        color: null,
      };
    },
  },
};
</script>
