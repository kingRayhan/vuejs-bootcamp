<template>
  <div class="person">
    <h1>Person name: {{ name }}</h1>
    <h1>Person age: {{ age }}</h1>
  </div>
</template>

<script>
export default {
  props: ["name", "age"],
};
</script>

<style scoped>
.person {
  background-color: #f0f0f0;
  padding: 20px;
}

h1 {
  color: green;
}
</style>
