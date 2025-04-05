<template>
  <div>
    <div>
      <label for="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        :value="firstName"
        @input="updateFirstName($event.target.value)"
        :class="{'error': !isFirstNameValid}"
      />
      <div v-if="!isFirstNameValid" class="error">First Name is required</div>
    </div>
 
    <div>
      <label for="memo">Memo:</label>
      <textarea
        id="memo"
        :value="memo"
        @input="updateMemo($event.target.value)"
        :class="{'error': !isMemoValid}"
      ></textarea>
      <div v-if="!isMemoValid" class="error">Memo is required</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChildFormComponent2',
  props: {
    firstName: String,
    memo: String
  },
  computed: {
    // Validations for the fields
    isFirstNameValid() {
      return this.firstName && this.firstName.trim() !== '';
    },
    isMemoValid() {
      return this.memo && this.memo.trim() !== '';
    }
  },
  methods: {
    updateFirstName(value) {
      this.$emit('update-first-name', value);
    },
    updateMemo(value) {
      this.$emit('update-memo', value);
    },

    // This method returns the current form data
    getFormData() {
      return {
        firstName: this.firstName,
        memo: this.memo
      };
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
  font-size: 12px;
}
</style>
