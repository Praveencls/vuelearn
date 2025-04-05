<template>
  <div>
    {{ myprop }}
    <h2>Sub Child Component Props: </h2>
    <sub-child-component :myprop="myprop"></sub-child-component>
  </div>
</template>

<script>
import SubChildComponent from "./SubChildComponent.vue";
export default {
    name: "ChildComponent",
    components: {
      SubChildComponent,
    },
  props: {
    myprop: {
      type: String,
    },
  }
};
</script>

<style>

</style>
