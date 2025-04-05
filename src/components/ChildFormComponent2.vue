<template>
  <div>
    <div>
      <label for="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        :value="firstName"
        @input="setInput" 
        :class="{'error': !isFirstNameValid, 'valid': isFirstNameValid}"
      />
      <div v-if="!isFirstNameValid" class="error">First Name is required</div>
    </div>

    <div>
      <label for="memo">Memo:</label>
      <textarea
        id="memo"
        :value="memo"
        @input="setInput"
        :class="{'error': !isMemoValid, 'valid': isMemoValid}"
      ></textarea>
      <div v-if="!isMemoValid" class="error">Memo is required</div>
    </div>
  </div>
</template>

<script>
import formMixin from '../mixin/formMixin';// Import the form mixin

export default {
  name: 'ChildFormComponent2',
  mixins: [formMixin],
  methods: {
    setInput(event) {
      const { id, value } = event.target;
      this.updateField(id, value); // Update the form field
    },
    updateField(field, value) {
      this[field] = value; // Update local data
      this.$emit('input', { field, value }); // Emit event to parent
    },
    resetForm() {
      this.firstName = "";
      this.lastName = "";
      this.memo = "";
    },
  },
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
