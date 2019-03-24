<template>
  <div class="index-card">
    <nuxt-link class="anchor" :to="linkTo">
      <figure v-if="$slots.image" class="image">
        <slot name="image" />
      </figure>
      <div v-if="$slots.contents" class="contents">
        <slot name="contents" />
      </div>
      <div v-if="$slots.sub" class="sub">
        <slot name="sub" />
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
  display: flex;
  flex-direction: column;
  color: inherit;
  height: 100%;
}
.contents {
  padding-top: 15px;
  flex-grow: 1;
}
</style>
