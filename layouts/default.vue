<template>
  <div>
    <navbar :user="user" />
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import navbar from '~/components/organisms/navbar';

export default {
  components: {
    navbar
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['signOut'])
  }
};
</script>
