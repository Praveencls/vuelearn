<template>
  <div>
    <h2>Todos List</h2>
    <ul>
      <todo v-for="(todo, index) in todos" :key="index" :todo="todo" />
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
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  },
};
</script>

<style>

</style>