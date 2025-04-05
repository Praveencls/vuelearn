<template>
  <div>
    <child-component :myprop="myprop"></child-component>
  </div>
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
    };
  },
};
</script>

<style>

</style>