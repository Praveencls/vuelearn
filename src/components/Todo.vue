<template>
  <div style="width:250px; margin:5px auto;">
    <div style="display:flex; justify-content:space-between">
      <span>{{ todo.text }}</span>
    </div>
  </div>
</template>

<script>
  export default {props: ["todo"]};
</script>

<style>

</style>