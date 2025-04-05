<template>
  <div>
    <div>
      <label for="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        :value="firstName"
        @input="updateFirstName($event.target.value)"
      />
    </div>
    <div>
      <label for="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        :value="lastName"
        @input="updateLastName($event.target.value)"
      />
    </div>
    <div>
      <label for="memo">Memo:</label>
      <textarea
        id="memo"
        :value="memo"
        @input="updateMemo($event.target.value)"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    firstName: String,
    lastName: String,
    memo: String
  },
  methods: {
    updateFirstName(value) {
      this.$emit('update-first-name', value);
    },
    updateLastName(value) {
      this.$emit('update-last-name', value);
    },
    updateMemo(value) {
      this.$emit('update-memo', value);
    },

    // This method returns the current form data
    getFormData() {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        memo: this.memo
      };
    }
  }
};
</script>
