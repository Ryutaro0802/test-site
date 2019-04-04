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
import { mapGetters, mapActions, mapMutations } from 'vuex';
import auth from '~/plugins/auth';

export default {
  layout: 'column2',
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  async created() {
    let user = null;
    if (!this.user) {
      user = await auth();
    }
    this.setUser({ user });
    // this.loadComplete();
  },
  methods: {
    ...mapActions({
      callAuth: 'callAuth',
      loadComplete: 'loadComplete'
    }),
    ...mapMutations({
      setUser: 'setUser'
    })
  }
};
</script>
