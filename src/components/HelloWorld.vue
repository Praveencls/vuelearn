<template>
  <div class="hello">
    <input type="password" v-model="password" />
    <p v-if="password.length == 0">Enter a password</p>
    <p v-else-if="password.length > 0 && password.length < 8">
      It require minimum 8 letters.
    </p>
    <p v-else>Good job, go ahead and submit form.</p>
    <button v-show="password.length >= 8">
      <a :href="url" target="_blank">Submit</a>
    </button>
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
      password: "",
      url: "https://vuejs.org",
    };
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
