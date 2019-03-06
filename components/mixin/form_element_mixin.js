export default {
  props: {
    size: String,
    expanded: Boolean,
    loading: Boolean,
    rounded: Boolean,
    autocomplete: {
      type: String,
      default: 'off'
    },
    maxlength: [Number, String],
    useHtml5Validation: Boolean
  },
  data() {
    return {
      isValid: true,
      isFocused: false
    };
  },
  methods: {
    focus() {
      if (this.$data.elementRef === undefined) {
        return;
      }
      this.$nextTick(() =>
        this.$el.querySelector(this.$data.elementRef).focus()
      );
    },
    onBlur($event) {
      this.isFocused = false;
      this.$emit('blur', $event);
      this.checkHtml5Validity();
    },
    onFocus($event) {
      this.isFocused = true;
      this.$emit('focus', $event);
    },
    checkHtml5Validity() {
      if (!this.useHtml5Validation) {
        return;
      }
      if (this.$refs[this.$data.elementRef] === undefined) {
        return;
      }
      const el = this.$el.querySelector(this.$data.elementRef);
      let type = null;
      let message = null;
      let isValid = true;
      if (!el.checkValidity) {
        type = 'is-danger';
        message = el.validationMessage;
        isValid = false;
      }
      this.isValid = isValid;
      return this.isValid;
    }
  }
};
