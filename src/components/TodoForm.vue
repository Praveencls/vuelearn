<template>
  <div>
    <h2>todo form</h2>
    <input type="text" v-model="todoText" placeholder="Enter todo" />
    <button @click="addTodo()">Add Todo</button>
  </div>
</template>

<script>
export default{
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    addTodo() {
      if (this.todoText.trim() === "") return;
      this.$store.dispatch("addNewTodo", this.todoText);
      this.todoText = ""; // Clear the input field after adding the todo
    },
  },
}
</script>

<style>

</style>