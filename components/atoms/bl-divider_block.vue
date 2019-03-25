<template>
  <div class="divider-block" :class="customClass">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BlDividerBlock',
  props: {
    customClass: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>
.divider-block {
  border-top: 1px solid #e6e6e6;
  padding: 40px 0;
}
</style>
