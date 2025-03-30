<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Counter: {{ counter }}</h3>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>

    <h3>Todo List</h3>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo.text }}
        <button @click="removeTodo()">Remove Todo</button>
      </li>
    </ul>
    <input v-model="newTodo" placeholder="Add a new todo" />
    <button @click="addnewTodo()">Add Todo</button>
    <h3>Active State</h3>
    <p v-if="isActive">The state is active!</p>
    <p v-else>The state is inactive!</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      counter: 0,
      newTodo: "",
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Learn Vue Router" },
        { text: "Learn Vuex" },
      ],
      isActive: true,
    };
  },
  methods: {
    addnewTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({ text: this.newTodo });
        this.newTodo = "";
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    toggleActive() {
      this.isActive = !this.isActive;
    },
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
