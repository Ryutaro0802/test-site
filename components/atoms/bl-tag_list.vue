<template>
  <div class="tags" :class="{ 'has-addons': attached}">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'BlTagList',
  props: {
    attached: Boolean
  }
};
</script>
