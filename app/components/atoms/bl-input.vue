<template>
  <div class="control" :class="rootClasses">
    <input
      v-if="type !== 'textarea'"
      ref="input"
      class="input"
      :class="[inputClasses, customClass]"
      :type="type"
      :autocomplete="autocomplete"
      :maxlength="maxlength"
      :value="computedValue"
      v-bind="$attrs"
      @input="onInput"
      @blur="onBlur"
      @focus="onFocus"
    />
    <textarea
      v-else
      ref="textarea"
      class="textarea"
      :class="[inputClasses, customClass]"
      :maxlength="maxlength"
      :value="computedValue"
      v-bind="$attrs"
      @input="onInput"
      @blur="onBlur"
      @focus="onFocus"
    />
    <small
      v-if="maxlength && hasCounter && type !== 'number'"
      class="help counter"
      :class="{ 'is-invisible': !isFocused }"
    >
      {{ valueLength }} / {{ maxLength }}
    </small>
  </div>
</template>
<script>
import FormElementMixin from '~/components/mixin/form_element_mixin';

export default {
  name: 'BlInput',
  mixins: [FormElementMixin],
  inheritAttrs: false,
  props: {
    value: [Number, String],
    type: {
      type: String,
      default: 'text'
    },
    passwordReveal: Boolean,
    hasCounter: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      newValue: this.value,
      newType: this.type,
      newAutoComplete: this.autocomplete,
      isPasswordVisible: false,
      elementRef: this.type === 'textarea' ? 'textarea' : 'input'
    };
  },
  computed: {
    computedValue: {
      get() {
        return this.newValue;
      },
      set(value) {
        this.newValue = value;
        this.$emit('input', value);
        !this.isValid && this.checkHtml5Validity();
      }
    },
    rootClasses() {
      return [
        this.size,
        {
          'is-expanded': this.expanded,
          'is-loading': this.loading,
          'is-clearfix': !this.hasMessage
        }
      ];
    },
    inputClasses() {
      return [this.statusType, this.size, { 'is-rounded': this.rounded }];
    },
    hasMessage() {
      return !!this.statusMessage;
    },
    valueLength() {
      if (typeof this.computedValue === 'string') {
        return this.computedValue.length;
      } else if (typeof this.computedValue === 'number') {
        return this.computedValue.toString().length;
      }
      return 0;
    }
  },
  watch: {
    value(value) {
      this.newValue = value;
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
      this.newType = this.isPasswordVisible ? 'text' : 'password';
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    onInput(event) {
      this.$nextTick(() => {
        if (event.target) {
          this.computedValue = event.target.value;
        }
      });
    }
  }
};
</script>
