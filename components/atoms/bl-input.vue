<template>
  <div>
    <template v-if="type !== 'textarea'">
      <input
        ref="input"
        class="input"
        type="text"
        :tabindex="tabindex"
        v-bind="$attrs"
        :disabled="disabled"
        :readonly="readonly"
        :value="nativeInputValue"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      >
    </template>
    <textarea
      v-else
      ref="textarea"
      :tabindex="tabindex"
      :value="nativeInputValue"
      :disabled="disabled"
      :readonly="readonly"
      v-bind="$attrs"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    />
  </div>
</template>

<script>
export default {
  name: 'BlInput',
  props: {
    value: [String, Number],
    size: String,
    disabled: Boolean,
    readonly: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    tabindex: String
  },
  data() {
    return {
      hovering: {
        type: Boolean,
        default: false
      },
      focused: {
        type: Boolean,
        default: false
      }
    };
  },
  methods: {
    getInput() {
      return this.$refs.input || this.$refs.textarea;
    },
    clear() {
      this.$emit('input', '');
      this.$emit('change', '');
      this.$emit('clear');
    }
  }
};
</script>
