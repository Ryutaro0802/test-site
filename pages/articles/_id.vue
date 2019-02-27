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
  async created() {
    if (!this.articles.length) {
      await this.$store.dispatch('INIT_ARTICLES');
    }
    this.setArticleId({ id: this.$route.params.id });
  },
  methods: {
    ...mapMutations(['setArticleId'])
  }
};
</script>

<style>
</style>
