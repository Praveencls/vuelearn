<template>
  <div v-show="visible" class="parent-form-component">
    <h1>Parent Form</h1>
    
    <!-- Dynamic component rendering based on isBusiness prop -->
    <component
      :is="isBusiness ? 'BusinessForm' : 'PersonalForm'"
      ref="childForm"
      v-bind="formProps"
      v-on="formEvents"
    />

    <!-- Form buttons -->
    <div>
      <button type="button" @click="onCancel">Cancel</button>
      <button type="submit" :disabled="$v.$invalid || $v.$pending" @click="onSave">Save</button>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';  // Import validators from Vuelidate
import PersonalForm from './ChildFormComponent.vue'; // Import child form component
import BusinessForm from './ChildFormComponent2.vue'; // Import child form component

export default {
  components: {
    PersonalForm,
    BusinessForm
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    isBusiness: {
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
