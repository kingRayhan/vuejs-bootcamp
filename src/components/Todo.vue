<template>
  <div
    @click="$emit('onToggle', todo)"
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

<script>
export default {
  props: ["todo"],
};
</script>
