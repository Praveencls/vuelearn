<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Counter: {{ counter }}</h3>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>

    <h3>Todo List</h3>
    <ul>
      <li v-for="(todo, index) in incompletedTodos" :key="index">
        <span :style="{ textDecoration: todo.completed ? 'line-through' : '' }">
          {{ todo.text }}
        </span>
        <button @click="removeTodo()">Remove Todo</button>
      </li>
    </ul>
    <input v-model="newTodo" placeholder="Add a new todo" />
    <button @click="addnewTodo()">Add Todo</button>
    {{ newMessageLetterCount }}
    <h3>Completed Tasks</h3>
    <ul>
      <li v-for="(todo, index) in completedTodos" :key="index">
        <span :style="{ textDecoration: todo.completed ? 'line-through' : '' }">
          {{ todo.text }}
        </span>
        <button @click="removeTodo()">Remove Todo</button>
      </li>
    </ul>
    <h3>Active State</h3>
    <p v-if="isActive">The state is active!</p>
    <p v-else>The state is inactive!</p>
    <input type="text" v-model="message" placeholder="Type something..." />
    {{ message | capitalize }}
    <p v-if="typing">Typing...</p>
    <p v-else>Not typing...</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  filters: {
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  data() {
    return {
      counter: 0,
      typing: false,
      newTodo: "",
      message: "",
      todos: [
        { text: "Learn JavaScript", completed: false },
        { text: "Learn HTML", completed: false },
        { text: "Learn CSS", completed: false },
        { text: "Learn React", completed: true },
      ],
      isActive: true,
    };
  },
  computed: {
    newMessageLetterCount() {
      return this.newTodo.length;
    },
    completedTodos() {
      return this.todos.filter((todo) => todo.completed);
    },
    incompletedTodos() {
      return this.todos.filter((todo) => !todo.completed);
    },
  },
  watch: {
    message(newValue, oldValue) {
      console.log("Message changed to: ", newValue);
      console.log("Message old: ", oldValue);
      this.typing = true;

      setTimeout(() => {
        this.typing = false;
      }, 2000);
    },
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
