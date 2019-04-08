<template>
  <div>
    <div v-if="!isLoaded">Loading..</div>
    <div v-show="isLoaded" class="container">
      <BlLogo>
        memo.
      </BlLogo>
      <BlNavbar />
      <nuxt />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BlNavbar from '~/app/components/organisms/bl-navbar';
import BlLogo from '~/app/components/atoms/bl-logo';

export default {
  components: {
    BlNavbar,
    BlLogo
  },
  computed: {
    ...mapGetters(['isLoaded'])
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
