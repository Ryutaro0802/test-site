<template>
  <nuxt-link to="/" class="navbar-item">
    <h1 class="title is-1">
      <slot />
    </h1>
  </nuxt-link>
</template>

<script>
export default {
  name: 'BlLogo'
};
</script>
