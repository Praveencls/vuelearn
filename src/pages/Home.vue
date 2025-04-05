<template>
  <div>
    <parent-component></parent-component>
  </div>
</template>

<script>
import ParentComponent from '@/components/ParentComponent.vue';
export default {
  name: "Home",
  components: {ParentComponent},
};
</script>

<style>

</style>