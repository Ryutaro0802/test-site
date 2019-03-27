<template>
  <div>
    <template v-if="isLoaded">
      <h1 class="title is-1">
        {{ article.title }}
      </h1>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="markDownToHtml" />
    </template>
  </div>
</template>

<script>
import marked from 'marked';
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  computed: {
    markDownToHtml() {
      return marked(this.article.text);
    },
    ...mapGetters({
      articles: 'articles/articles',
      article: 'articles/article',
      isLoaded: 'isLoaded'
    })
  },
  async created() {
    const articleId = this.$route.params.id;
    const article = this.articles.find(article => article.id === articleId);
    this.saveArticle({ article });
    if (!article) {
      await this.INIT_SINGLE_ARTICLE({ id: articleId });
    }
    this.loadComplete();
  },
  methods: {
    ...mapActions({
      INIT_SINGLE_ARTICLE: 'articles/INIT_SINGLE_ARTICLE',
      loadComplete: 'loadComplete'
    }),
    ...mapMutations({
      saveArticle: 'articles/saveArticle'
    })
  }
};
</script>
