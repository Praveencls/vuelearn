<template>
	<div>
		<h1 v-show="isBusiness">Business</h1>
		<h1 v-show="!isBusiness">Personal</h1>
		<div>
			<label for="firstName">First Name:</label>
			<input
				type="text"
				id="firstName"
				:value="firstName"
				@input="setInput"
				:class="{ error: !isFirstNameValid, valid: isFirstNameValid }"
			/>
			<div v-if="!isFirstNameValid" class="error">First Name is required</div>
		</div>

		<div>
			<label for="lastName">Last Name:</label>
			<input
				type="text"
				id="lastName"
				:value="lastName"
			  @input="setInput"
				:class="{ error: !isLastNameValid, valid: isLastNameValid }"
			/>
			<div v-if="!isLastNameValid" class="error">Last Name is required</div>
		</div>

		<div>
			<label for="memo">Memo:</label>
			<textarea
				id="memo"
				:value="memo"
				@input="setInput"
				:class="{ error: !isMemoValid, valid: isMemoValid }"
			></textarea>
			<div v-if="!isMemoValid" class="error">Memo is required</div>
		</div>
	</div>
</template>

<script>
import formMixin from "../mixin/formMixin"; // Import the form mixin

export default {
	name: "ChildFormComponent",
	mixins: [formMixin]
};
</script>

<style scoped>
.error {
	color: red;
	font-size: 12px;
}

.valid {
	border: 2px solid green;
}
</style>
