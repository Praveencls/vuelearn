<template>
  <div>
    <child-component 
      :myprop="myprop" 
      @change-username="updateUsername"
    ></child-component>
    <p class="username">Hello, {{ username }}</p>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";
export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      myprop: "Hello from ParentComponent Mr. Praveen",
      username: "Praveen",
    };
  },
};
</script>

<style>

</style>