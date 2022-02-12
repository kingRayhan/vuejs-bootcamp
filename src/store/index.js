import { createStore } from "vuex";
import notes from "./notes";

const store = createStore({
  modules: {
    notes,
  },
});
export default store;
