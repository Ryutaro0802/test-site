<template>
  <div>
    <BlNavbar :user="user" />
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BlNavbar from '~/components/organisms/bl-navbar';

export default {
  components: {
    BlNavbar
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['signOut'])
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
