<template>
  <div>
    <!-- <div v-if="!isLoaded">Loading..</div> -->
    <template>
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
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HeadNav from '~/components/organisms/BlHeadNav';
import SideNav from '~/components/organisms/BlSideNav';

export default {
  components: {
    HeadNav,
    SideNav
  },
  computed: {
    ...mapGetters({
      isLoaded: 'isLoaded'
    })
  }
};
</script>
