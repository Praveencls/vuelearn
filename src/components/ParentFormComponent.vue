<template>
	<div v-show="visible" class="parent-form-component">
	  <h1>Parent Form</h1>
  
	  <!-- Dynamic component rendering based on isBusiness prop -->
	  <component
		:is="isBusiness ? 'BusinessForm' : 'PersonalForm'"
		ref="childForm"
		@input="onChildInput" 
	  />
  
	  <!-- Form buttons -->
	  <div>
		<button type="button" @click="onCancel">Cancel</button>
		<button
		  type="submit"
		  :disabled="$v.$invalid || $v.$pending"
		  @click="onSave"
		>
		  Save
		</button>
	  </div>
	</div>
  </template>
  
  <script>
  import { required } from "vuelidate/lib/validators"; // Import validators from Vuelidate
  import PersonalForm from "./ChildFormComponent.vue"; // Import child form component
  import BusinessForm from "./ChildFormComponent2.vue"; // Import child form component
  import formMixin from '../mixin/formMixin';// Import the form mixin
  
  export default {
	mixins: [formMixin],
	components: {
	  PersonalForm,
	  BusinessForm,
	},
	props: {
	  visible: {
		type: Boolean,
		default: false,
	  },
	  isBusiness: {
		type: Boolean,
		default: false,
	  },
	},
	data() {
	  return {
		firstName: "",
		lastName: "",
		memo: "",
	  };
	},
	validations() {
	  const validations = {
		firstName: { required },
		memo: { required },
	  };
  
	  // If it's a business form, we don't require lastName
	  if (!this.isBusiness) {
		validations.lastName = { required };
	  }
  
	  return validations;
	},
	methods: {
	  updateField(field, value) {
		this[field] = value;
	  },
	  onChildInput(event) {
		const { field, value } = event;
		this.updateField(field, value); // Update the field based on child input
	  },
	  onSave() {
		// Trigger touch to mark fields as "touched"
		this.$v.$touch();
  
		// If the form is invalid, do not proceed
		if (this.$v.$invalid) {
		  console.log("Form is invalid!");
		  return;
		}
  
		// Handle form submission
		console.log("Form data:", {
		  firstName: this.firstName,
		  lastName: this.lastName,
		  memo: this.memo,
		});
  
		// After submission, reset form fields or perform other actions
	  },
	  onCancel() {
		// Reset the parent form data
		this.firstName = "";
		this.lastName = "";
		this.memo = "";
  
		// Optionally, reset the child form as well
		if (this.$refs.childForm && this.$refs.childForm.resetForm) {
		  this.$refs.childForm.resetForm(); // Reset child form if it has a resetForm method
		}
	  },
	},
  };
  </script>
  