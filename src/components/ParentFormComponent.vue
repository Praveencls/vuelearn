<template>
  <div v-show="visible" class="parent-form-component">
    <h1>Parent Form</h1>
    
    <!-- Child form component -->
    <ChildForm 
    ref="childForm"
      v-bind="formProps" 
      v-on="formEvents" 
    />

    <!-- Error messages -->
    <div v-if="!$v.$pending">
      <div v-if="!$v.firstName.$model">
        <span class="error">First Name is required.</span>
      </div>
      <div v-if="!$v.lastName.$model">
        <span class="error">Last Name is required.</span>
      </div>
      <div v-if="!$v.memo.$model">
        <span class="error">Memo is required.</span>
      </div>
    </div>

    <!-- Form buttons -->
    <div>
      <button type="button" @click="onCancel">Cancel</button>
      <button type="submit" :disabled="$v.$invalid || $v.$pending" @click="onSave">Save</button>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';  // Import validators from Vuelidate
import ChildForm from './ChildFormComponent.vue'; // Import child form component

export default {
  components: {
    ChildForm
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      memo: ''
    };
  },
  computed: {
    formProps() {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        memo: this.memo
      };
    },
    formEvents() {
      return {
        'update-first-name': (value) => this.updateField('firstName', value),
        'update-last-name': (value) => this.updateField('lastName', value),
        'update-memo': (value) => this.updateField('memo', value)
      };
    }
  },
  validations() {
    return {
      firstName: { required },
      lastName: { required },
      memo: { required }
    };
  },
  methods: {
    updateField(field, value) {
      this[field] = value;
    },
    onSave() {
      // Trigger touch to mark fields as "touched"
      this.$v.$touch();
      
      // If the form is invalid, do not proceed
      if (this.$v.$invalid) {
        console.log('Form is invalid!');
        return;
      }

      // Handle form submission
      console.log('Form data:', {
        firstName: this.firstName,
        lastName: this.lastName,
        memo: this.memo
      });

      // After submission, reset form fields or perform other actions
    },
    onCancel() {
      // Reset the form
      this.firstName = '';
      this.lastName = '';
      this.memo = '';
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
