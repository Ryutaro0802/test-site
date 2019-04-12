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
import { mapGetters } from 'vuex';

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
  async asyncData({ store, route, params }) {
    await store.dispatch('articles/INIT_SINGLE_ARTICLE', { id: params.id });
    store.dispatch('loadComplete');
  }
};
</script>
