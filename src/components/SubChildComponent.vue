<template>
  <div>
    {{ myprop }}
  </div>
</template>

<script>
export default {
  name: "SubChildComponent",
  props: {
    myprop: {
      type: String,
    },
  },
};
</script>

<style>

</style>