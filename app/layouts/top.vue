<template>
  <div>
    <BlNavbar :user="user" />
    <div class="container">
      <div class="columns">
        <div class="column is-9">
          <nuxt />
        </div>
        <div class="column is-3 ">
          <BlSideNavUser />
        </div>
      </div>
    </div>
    <BlFooter />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BlSideNavUser from '~/components/organisms/BlSideNavUser';
import BlNavbar from '~/components/organisms/BlNavBar';
import BlFooter from '~/components/organisms/BlFooter';

export default {
  components: {
    BlNavbar,
    BlSideNavUser,
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
