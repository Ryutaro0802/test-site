<template>
  <div class="card">
    <div v-if="$slots.cardImage" class="card-image">
      <figure class="image is-4by3">
        <slot name="cardImage" />
      </figure>
    </div>
    <div v-if="$slots.cardContent" class="card-content">
      <slot name="cardContent" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlCard'
};
</script>
