<template>
  <div>
    <BlNavbar :user="user" />
    <div class="container">
      <div class="columns">
        <div class="column is-9">
          <nuxt />
        </div>
        <div class="column is-3 ">
          <BlSideNav />
        </div>
      </div>
    </div>
    <BlFooter />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BlSideNav from '~/app/components/organisms/bl-side_nav_user';
import BlNavbar from '~/app/components/organisms/bl-navbar';
import BlFooter from '~/app/components/organisms/bl-footer';

export default {
  components: {
    BlNavbar,
    BlSideNav,
    BlFooter
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
@media screen and (max-width: 1087px) {
  .container {
    padding: 0.75em;
  }
}
</style>
