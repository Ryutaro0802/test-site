<template>
  <div>
    <BlNavbar :user="user" />
    <div class="container">
      <nuxt />
    </div>
    <BlFooter />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BlNavbar from '~/components/organisms/bl-navbar';
import BlFooter from '~/components/organisms/bl-footer';

export default {
  components: {
    BlNavbar,
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
