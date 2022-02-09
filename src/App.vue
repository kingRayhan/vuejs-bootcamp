<template>
  <Layout>
    <template #app-title> Vuejs todos </template>
    <div class="composer">
      <Composer v-model="newTodo" @onEnter="addTodo" />
      <div class="filter">
        <div class="filter__left">
          <button
            @click="filter_mode = 'all'"
            class="filter__button filter__button--active"
          >
            All ({{ todoCount }})
          </button>
          <button @click="filter_mode = 'undone'" class="filter__button">
            Pending ({{ undoneCount }})
          </button>
          <button @click="filter_mode = 'done'" class="filter__button">
            Done ({{ doneCount }})
          </button>
        </div>
        <div>
          <button class="filter__button filter__button--danger" @click="clear">
            Clear
          </button>
        </div>
      </div>
    </div>

    <div class="todos">
      <!-- Todo start -->
      <Todo
        v-for="todo in filteredTodos"
        :key="todo.id"
        :todo="todo"
        @onToggle="toggleDone"
      />
      <!-- Todo end -->
    </div>
  </Layout>
</template>

<script>
import { v4 as uid } from "uuid";
import Todo from "./components/Todo.vue";
import Composer from "./components/Composer.vue";
import Layout from "./components/Layout.vue";
export default {
  mounted() {
    this.todos = JSON.parse(localStorage.getItem("todos"));
  },
  updated() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  },
  name: "TodoApp",
  components: {
    Todo,
    Composer,
    Layout,
  },
  data() {
    return {
      newTodo: "",
      todos: [],
      filter_mode: "all",
    };
  },
  methods: {
    handleTyping(task) {
      this.newTodo = task;
    },
    addTodo(e) {
      const todo = {
        id: uid,
        task: this.newTodo,
        done: false,
        time: new Date().toString(),
      };
      this.todos.unshift(todo);
      this.newTodo = "";
    },
    toggleDone(todo) {
      todo.done = !todo.done;
    },
    clear() {
      this.todos = this.todos.filter((todo) => !todo.done);
    },
  },
  computed: {
    filteredTodos() {
      if (this.filter_mode == "all") return this.todos;
      if (this.filter_mode == "done")
        return this.todos.filter((todo) => todo.done);

      if (this.filter_mode == "undone")
        return this.todos.filter((todo) => !todo.done);
    },
    todoCount() {
      return this.todos.length;
    },
    doneCount() {
      return this.todos.filter((todo) => todo.done).length;
    },
    undoneCount() {
      return this.todos.filter((todo) => !todo.done).length;
    },
  },
};
</script>
