<template>
  <div>
    <h1 class="title is-3">
      ログイン
    </h1>
    <div v-if="!user">
      <a class="button" @click="callAuth">SignIn</a>
    </div>
    <div v-else>
      ログイン済み
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import auth from '~/plugins/auth';

export default {
  layout: 'column2',
  computed: {
    ...mapGetters(['user'])
  },
  async created() {
    if (this.user) {
      return;
    }
    const user = await auth();
    this.$store.commit('setUser', { user });
  },
  methods: {
    ...mapActions(['callAuth'])
  }
};
</script>

<style>
</style>
