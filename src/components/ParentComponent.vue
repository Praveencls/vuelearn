<template>
	<div>
	  <h1>Parent Component</h1>
	  <!-- Passing the 'superusername' as a prop to the ChildComponent -->
	  <child-component 
		:myprop="parentMessage"
		@changeUsername="handleUsernameChange"
	  />
	  <p>Parent Username: {{ parentUsername }}</p>
	</div>
  </template>
  
  <script>
  // Importing the ChildComponent
  import ChildComponent from "./ChildComponent.vue";
  
  export default {
	name: "ParentComponent",
	components: {
	  ChildComponent,
	},
	data() {
	  return {
		parentUsername: "InitialUsername",
		parentMessage: "Hello from Parent!", // This is the message passed as `myprop` to Child
	  };
	},
	methods: {
	  handleUsernameChange(newUsername) {
		// Update the parent username when the child emits the 'changeUsername' event
		this.parentUsername = newUsername;
	  },
	},
  };
  </script>
  
  <style scoped>
  /* Add any styling for the parent component here */
  </style>
  