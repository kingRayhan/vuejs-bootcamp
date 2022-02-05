<template>
  <Header />
  <section class="grid grid-cols-4">
    <aside class="col-span-1 bg-gray-400 h-screen">
      <slot name="sidebar-left" />
    </aside>
    <main class="col-span-2 p-10">
      <slot />
    </main>
    <aside class="col-span-1 bg-gray-400">
      <slot name="sidebar-right" />
    </aside>
  </section>

  <footer></footer>
</template>

<script>
import Header from "./Header.vue";
export default {
  components: {
    Header,
  },
};
</script>
