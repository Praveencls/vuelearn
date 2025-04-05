<template>
  <div>
    <parent-component></parent-component>
    <parent-form-component :visible="showForm" :isBusiness="isBusiness"></parent-form-component>
    <button @click="toggleFormVisibility">
      {{ showForm ? 'Hide Form' : 'Show Form' }}
    </button>
  </div>
</template>

<script>
import ParentComponent from '@/components/ParentComponent.vue';
import ParentFormComponent from '@/components/ParentFormComponent.vue';
export default {
  name: "Home",
  components: {ParentComponent, ParentFormComponent},
  data() {
    return {
      showForm: false, // Initial state is to hide the form
      isBusiness: true // This can be set based on your logic
    };
  },
  methods: {
    toggleFormVisibility() {
      this.showForm = !this.showForm; // Toggle the form visibility
    }
  }
};
</script>

<style>

</style>