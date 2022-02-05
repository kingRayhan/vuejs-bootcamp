<template>
  <Layout>
    <template #sidebar-left>
      <h1>Sidebar left</h1>
    </template>

    <button
      @click="toggle"
      class="text-white bg-blue-600 p-2 hover:bg-blue-400"
    >
      toggle
    </button>

    <Person @close="handleClosePersonComponent" :name="name" v-if="visible" />

    <!-- <Person :name="">

    </Person> -->
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum accusamus
      quidem ut, dicta non minus sapiente alias. Necessitatibus alias enim ipsum
      laboriosam possimus magnam rem dolores quasi, nobis, optio doloribus.
    </p>

    <template #sidebar-right>
      <h1>Sidebar right</h1>
    </template>
  </Layout>
</template>

<script>
import Person from "./components/Person.vue";
import Layout from "./components/Layout.vue";
export default {
  name: "Rayhan",
  components: {
    Person,
    Layout,
  },
  data() {
    return {
      count: 0,
      url: "http://google.com",
      name: "Rayhan",
      visible: false,
    };
  },
  methods: {
    toggle(e) {
      this.visible = !this.visible;
    },
    handleClosePersonComponent(event) {
      console.log(event);
    },
  },
};
</script>
