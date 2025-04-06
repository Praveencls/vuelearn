// formMixin.js
import addressformMixin from "./addressformMixin";
export default {
	mixins: [addressformMixin],
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
		setInput(event) {
			const { id, value } = event.target;
			this.updateField(id, value); // Update the form field
		},
		updateField(field, value) {
			this[field] = value; // Update local data
			this.$emit("input", { field, value }); // Emit event to parent
		},
		resetForm() {
			this.firstName = "";
			this.lastName = "";
			this.memo = "";
		},
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
		},
	},
};
