<template>
  <form @submit.prevent="$emit('onEnter')">
    <input
      type="text"
      placeholder="Type and hit enter..."
      class="composer__input"
      :value="modelValue"
      @keydown="$emit('update:modelValue', $event.target.value)"
    />
  </form>
</template>
<script setup>
defineProps(["modelValue"]);
</script>
