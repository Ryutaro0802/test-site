<template>
  <label
    ref="label"
    class="b-checkbox checkbox"
    :class="[size, { 'is-disabled': disabled }]"
    :disabled="disabled"
    :tabindex="disabled ? false : 0"
    @keydown.prevent.enter.space="$refs.label.click()"
  >
    <input
      v-model="computedValue"
      type="checkbox"
      tabindex="-1"
      :disabled="disabled"
      :required="required"
      :name="name"
      :value="nativeValue"
      :true-value="trueValue"
      :false-value="falseValue"
    >
    <span class="check" :class="type" />
    <span class="control-label">
      <slot />
    </span>
  </label>
</template>
<script>
export default {
  name: 'BlCheckbox',
  props: {
    value: {
      default: false,
      type: [String, Number, Boolean, Function, Object, Array, Symbol]
    },
    nativeValue: {
      default: false,
      type: [String, Number, Boolean, Function, Object, Array, Symbol]
    },
    type: {
      default: '',
      type: String
    },
    disabled: Boolean,
    required: Boolean,
    name: String,
    size: String,
    trueValue: {
      type: [String, Number, Boolean, Function, Object, Array, Symbol],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean, Function, Object, Array, Symbol],
      default: false
    }
  },
  data() {
    return {
      newValue: this.value
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
      }
    }
  },
  watch: {
    value(value) {
      this.newValue = value;
    }
  }
};
</script>
