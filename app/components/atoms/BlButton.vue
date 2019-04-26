<template>
  <component
    :is="tag"
    class="button"
    :class="[
      size,
      type,
      {
        'is-loading': loading,
        'is-hovered': hovered
      }
    ]"
    @click="'click', $event"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BlButton',
  props: {
    size: {
      type: String,
      default: ''
    },
    type: {
      type: [String, Object],
      default: String
    },
    tag: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    hovered: Boolean
  }
};
</script>
