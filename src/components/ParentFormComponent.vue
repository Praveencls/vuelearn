<template>
	<div v-if="visible">
		<h1>User Form</h1>
		<form @submit.prevent="onSave">
			<!-- Pass the form data to the child component -->
			<ChildForm :formData="formData" @update-form="updateForm" />
			<div>
				<button type="button" @click="onCancel">Cancel</button>
				<button type="submit">Save</button>
			</div>
		</form>
	</div>
</template>

<script>
import ChildForm from "./ChildFormComponent.vue";

export default {
	components: {
		ChildForm,
	},
	props: {
		visible: {
			type: Boolean,
			default: true,
		},
	},
	data() {
		return {
			formData: {
				firstName: "",
				lastName: "",
				memo: "",
			},
		};
	},
	methods: {
		// Update form data when child emits the event
		updateForm(updatedData) {
			this.formData = { ...this.formData, ...updatedData };
		},

		// Handle Save button click
		onSave() {
			console.log("Form data saved:", this.formData);
			// You can implement the save functionality here
		},

		// Handle Cancel button click
		onCancel() {
			console.log("Form cancelled");
			// Reset the form data or do any necessary cleanup
			this.formData = { firstName: "", lastName: "", memo: "" };
		},
	},
};
</script>
