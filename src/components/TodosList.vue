<template>
  <div>
    <h2>Todos List</h2>
    <ul>
      <todo v-for="(todo, index) in $store.state.todos" :key="index" :todo="todo" />
    </ul>

  </div>
</template>

<script>
import todo from "./Todo.vue";
export default {
  name: "TodosList",
  components: {
    todo,
  },
  data() {
    return {
    
    };
  },
};
</script>

<style>

</style>