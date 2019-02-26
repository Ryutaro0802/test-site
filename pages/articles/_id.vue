<template>
  <div>
    <h1 class="title is-1">
      {{article.title}}
    </h1>
    <p>
      {{article.text}}
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  async created() {
    if (!this.articles.length) {
      await this.$store.dispatch('INIT_ARTICLES');
    }
    console.log(this.$route.params.id);
  },
  computed: {
    article() {
      return this.articles.find(
        article => this.$route.params.id === article.id
      );
    },
    ...mapGetters(['articles'])
  }
};
</script>

<style>
</style>
