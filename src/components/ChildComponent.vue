<template>
  <div>
    <div>
        <form action="submit" @submit.prevent="$emit('changeUsername', superusername)">
      <input 
                type="text" 
                v-model="superusername" 
                placeholder="Enter your name" />
            <button
        type="sumbit"
      >
        Change Username
      </button>
    </form>
    <p>Value: {{ superusername }}</p>
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
    data() {
        return {
            superusername: "Praveen",
        };
    },
  props: {
    myprop: {
      type: String,
    }
  }
};
</script>

<style>

</style>
