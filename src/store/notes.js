const notes = {
  namespaced: true,
  state() {
    return {
      colors: ["#D8E2DC", "#FFE5D9", "#FBFAF0", "#FFE9EE", "#FFDDE4", "#FFF"],
      notes: JSON.parse(localStorage.getItem("notes:notes")) || [],
      filterColor: "",
    };
  },
  getters: {
    count(state) {
      return state.notes.length;
    },
    noteCountByColor(state) {
      return state.colors.map((color) => {
        return {
          color,
          noteCount: state.notes.filter((note) => note.color === color).length,
        };
      });
    },
    filteredNotes(state) {
      if (state.filterColor == "") {
        return state.notes;
      }
      return state.notes.filter((note) => note.color === state.filterColor);
    },
  },
  mutations: {
    addNote(state, note) {
      state.notes.unshift(note);
    },
    filterNote(state, color) {
      state.filterColor = color;
    },
    deleteNote(state, id) {
      state.notes = state.notes.filter((note) => note.id !== id);
    },
  },
};

export default notes;
