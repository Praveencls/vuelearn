<template>
  <div id="app">
    <h1>Todos</h1>
    <h3>Completed: {{ completedTodos }}</h3>
    <h3>Pending Todos: {{ pendingTodos }}</h3>
    <todos-list />
    <todo-form />
  </div>
</template>

<script>
import TodosList from "./components/TodosList.vue";
import TodoForm from "./components/TodoForm.vue";

export default {
  name: "App",
  components: {
    TodosList,
    TodoForm
  },
  computed: {
    completedTodos() {
      return this.$store.getters.completedTodos;
    },pendingTodos() {
      return this.$store.getters.pendingTodos;
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
