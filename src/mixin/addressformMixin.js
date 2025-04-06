// formMixin.js
export default {
	props: {
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
};
