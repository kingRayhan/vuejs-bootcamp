<template>
  <div>
    <!-- <div class="box" :style="boxStyle"></div> -->

    <input type="color" v-model="color" />
    <input type="range" v-model="height" max="500" />
    <input type="range" v-model="width" max="200" />

    <!-- <h1>Main app</h1>
    <a :href="link">Click Here</a>
    <Person :name="person.name" :age="person.age" /> -->
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import Person from "./components/Person.vue";
export default {
  components: {
    Counter,
    Person,
  },
  data() {
    return {
      name: "Rayhan",
      color: "#f0f0f0",
      width: 100,
      height: 100,
      link: "https://google.com",
      person: {
        name: "Rayhan",
        age: 26,
      },
      boxStyle: {
        backgroundColor: this.color,
      },
    };
  },
};
</script>

<style>
.box {
  width: 50px;
  height: 50px;
}
</style>
