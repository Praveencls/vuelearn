// formMixin.js
export default {
    data() {
		return {
			firstName: "",
			lastName: "",
			memo: "",
		};
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
		// Reset form method
		resetForm() {
			this.$emit("update-first-name", "");
			this.$emit("update-last-name", "");
			this.$emit("update-memo", "");
		}
	},
};
