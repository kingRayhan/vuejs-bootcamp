<template>
  <Layout>
    <Counter />
    <Counter />
  </Layout>
</template>

<script>
import Layout from "./components/Layout.vue";
import Counter from "./components/Counter.vue";
export default {
  name: "App2",
  components: { Layout, Counter },
};
</script>
