<template>
  <div class="index-card">
    <nuxt-link class="anchor" :to="linkTo">
      <figure v-if="$slots.image" class="image">
        <slot name="image" />
      </figure>
      <div v-if="$slots.contents" class="contents">
        <slot name="contents" />
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    linkTo: {
      default: '',
      type: String
    }
  }
};
</script>

<style scoped>
.anchor {
  display: block;
  color: inherit;
}
.contents {
  padding-top: 15px;
}
</style>
