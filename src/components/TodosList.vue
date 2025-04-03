<template>
  <div>
    <h2>Todos List</h2>
    <ul>
      <todo v-for="(todo, index) in todos" :key="index" :todo="todo" />
    </ul>

  </div>
</template>

<script>
import { mapState } from "vuex";
import todo from "./Todo.vue";
export default {
  name: "TodosList",
  components: {
    todo,
  },
  computed: {
    ...mapState({todos: "todos"}),
  },
};
</script>

<style>

</style>