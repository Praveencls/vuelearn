<template>
  <div>
    <div>
      <label for="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        :value="formData.firstName"
        @input="updateField('firstName', $event.target.value)"
      />
    </div>
    <div>
      <label for="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        :value="formData.lastName"
        @input="updateField('lastName', $event.target.value)"
      />
    </div>
    <div>
      <label for="memo">Memo:</label>
      <textarea
        id="memo"
        :value="formData.memo"
        @input="updateField('memo', $event.target.value)"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    formData: {
      type: Object,
      required: true
    }
  },
  methods: {
    // Emit the updated field value to the parent
    updateField(field, value) {
      this.$emit('update-form', { [field]: value });
    }
  }
};
</script>
