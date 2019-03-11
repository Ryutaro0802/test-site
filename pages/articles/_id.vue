<template>
  <div>
    <template v-if="article">
      <h1 class="title is-1">
        {{ article.title }}
      </h1>
      <div v-html="markDownToHtml" />
    </template>
  </div>
</template>

<script>
import marked from 'marked';
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    markDownToHtml() {
      return marked(this.article.text);
    },
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
