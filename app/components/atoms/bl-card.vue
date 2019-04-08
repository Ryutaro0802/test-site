<template>
  <div class="card" :class="customClass">
    <div v-if="$slots.image" class="card-image">
      <figure class="image is-4by3">
        <slot name="cardImage" />
      </figure>
    </div>
    <div v-if="$slots.contents" class="card-content">
      <slot name="cardContent" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlCard',
  props: {
    customClass: {
      type: String,
      default: ''
    }
  }
};
</script>
