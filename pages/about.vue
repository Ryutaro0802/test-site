<template>
  <div>
    AboutPage
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  created() {
    this.loadComplete();
  },
  methods: {
    ...mapActions(['loadComplete'])
  }
};
</script>
