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

      <div class="todos">
        <!-- Todo start -->
        <Todo
          v-for="todo in filteredTodos"
          :key="todo.id"
          :todo="todo"
          @onToggle="toggleDone"
        />
      </div>
    </div>
  </Layout>
</template>

<script setup>
import useCounter from "./counter";
import { v4 as uid } from "uuid";
import { ref, computed, watch } from "vue";
import Todo from "./components/Todo.vue";
import Composer from "./components/Composer.vue";
import Layout from "./components/Layout.vue";

const todos = ref(JSON.parse(localStorage.getItem("todos")) || []);
const filter_mode = ref("all");
const newTodo = ref("");

const { counter, increment, decrement } = useCounter();

const filteredTodos = computed(() => {
  if (filter_mode.value == "all") return todos.value;
  if (filter_mode.value == "done")
    return todos.value.filter((todo) => todo.done);

  if (filter_mode.value == "undone")
    return todos.value.filter((todo) => !todo.done);
});

const todoCount = computed(() => todos.value.length);
const doneCount = computed(
  () => todos.value.filter((todo) => todo.done).length
);
const undoneCount = computed(
  () => todos.value.filter((todo) => !todo.done).length
);

const addTodo = () => {
  const todo = {
    id: uid,
    task: newTodo.value,
    done: false,
    time: new Date().toString(),
  };
  todos.value.unshift(todo);
  newTodo.value = "";
};

const toggleDone = (todo) => {
  todo.done = !todo.done;
};

const clear = () => {
  todos.value = todos.value.filter((todo) => !todo.done);
};

watch(
  todos,
  (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },
  {
    deep: true,
  }
);
</script>
