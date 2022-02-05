<template>
  <div class="border relative border-dashed border-indigo-500 p-10 m-10">
    <button
      @click="$emit('close', 10)"
      class="text-2xl text-red-500 absolute top-0 right-2"
    >
      &times;
    </button>

    <h1 class="text-4xl font-semibold">My Name is {{ name }}</h1>
    <h1 class="text-2xl font-semibold">Age: {{ age }}</h1>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    console.log(this.name);
  },
};
</script>
