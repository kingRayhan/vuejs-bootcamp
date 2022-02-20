<template>
  <div
    @click="handleOnClick"
    class="todo"
    :class="{
      'todo--done': todo.done,
    }"
  >
    <div class="todo__status-dot"></div>
    <div>
      <p class="todo__content">{{ todo.task }}</p>
      <small class="todo__time">
        {{ todo.time }}
      </small>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["todo"]);
const emits = defineEmits(["onToggle"]);

const handleOnClick = () => {
  emits("onToggle", props.todo);
};
</script>
