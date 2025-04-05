// formMixin.js
export default {
	props: {
		firstName: String,
		lastName: String,
		memo: String,
        isBusiness: Boolean
	},
	computed: {
		isFirstNameValid() {
			return this.firstName && this.firstName.trim() !== "";
		},
		isLastNameValid() {
			return this.lastName && this.lastName.trim() !== "";
		},
		isMemoValid() {
			return this.memo && this.memo.trim() !== "";
		},
	},
	methods: {
		updateFirstName(value) {
			this.$emit("update-first-name", value);
		},
		updateLastName(value) {
			this.$emit("update-last-name", value);
		},
		updateMemo(value) {
			this.$emit("update-memo", value);
		},

		// This method returns the current form data
		getFormData() {
			return {
				firstName: this.firstName,
				lastName: this.lastName,
				memo: this.memo,
			};
		},

		// Reset form method
		resetForm() {
			this.$emit("update-first-name", "");
			this.$emit("update-last-name", "");
			this.$emit("update-memo", "");
		},
	},
};
