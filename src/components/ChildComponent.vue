<template>
  <div>
    <div>
        <form action="submit" @submit.prevent="$emit('changeUsername', username)">
      <input 
                type="text" 
                v-model="username" 
                placeholder="Enter your name" />
            <button
        type="sumbit"
      >
        Change Username
      </button>
    </form>
    <p>Value: {{ username }}</p>
    </div>
    {{ myprop }}
    <h2>Sub Child Component Props: </h2>
    <sub-child-component :myprop="myprop"></sub-child-component>
  </div>
</template>

<script>
import SubChildComponent from "./SubChildComponent.vue";
export default {
    name: "ChildComponent",
    components: {
      SubChildComponent,
    },
  props: {
    myprop: {
      type: String,
    },
    username: {
      type: String,
      default: "Praveen",
    },
  }
};
</script>

<style>

</style>
