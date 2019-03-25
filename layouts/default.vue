<template>
  <div>
    <div class="container">
      <BlLogo>
        memo.
      </BlLogo>
      <BlNavbar />
      <nuxt />
    </div>
  </div>
</template>

<script>
import BlNavbar from '~/components/organisms/bl-navbar';
import BlLogo from '~/components/atoms/bl-logo';

export default {
  components: {
    BlNavbar,
    BlLogo
  }
};
</script>

<style scoped>
.container {
  max-width: 1032px;
}
@media screen and (max-width: 1087px) {
  .container {
    padding: 0.75em;
  }
}
</style>
