<template>
  <div>
    <HeadNav />
    <div class="container">
      <div class="columns">
        <div class="column is-3 ">
          <SideNav />
        </div>
        <div class="column is-9">
          <nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import HeadNav from '~/components/organisms/head_nav';
import SideNav from '~/components/organisms/side_nav';

export default {
  components: {
    HeadNav,
    SideNav
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['signOut'])
  }
};
</script>
