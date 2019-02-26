<template>
  <div>
    <template v-if="article">
      <h1 class="title is-1">
        {{ article.title }}
      </h1>
      <p>
        {{ article.text }}
      </p>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters(['articles', 'article'])
  },
  created() {
    // if (!this.articles.length) {
    this.$store.dispatch('INIT_ARTICLES');
    console.log(this.$route.params.id);
    this.setArticleId({ id: this.$route.params.id });
    // }
  },
  methods: {
    ...mapMutations(['setArticleId'])
  }
};
</script>

<style>
</style>
