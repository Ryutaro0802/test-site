<template>
  <div>
    <!-- <BlTwitterButton /> -->
    <!-- <BlIconRss /> -->
    <div v-if="isLoaded" class="columns is-multiline">
      <div
        v-for="article in articles"
        :key="article.id"
        class="column is-one-third"
      >
        <BlArticleCard :article="article" class="article-card" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
// import BlTwitterButton from '~/app/components/atoms/bl-twitter_button';
// import BlIconRss from '~/app/components/atoms/bl-icon_rss';
import BlArticleCard from '~/app/components/molecules/bl-article_card';

export default {
  components: {
    BlArticleCard
  },
  computed: {
    ...mapGetters({
      articles: 'articles/articles',
      tags: 'tags/tags',
      isLoaded: 'isLoaded'
    })
  },
  async mounted() {
    await Promise.all([
      this.articles.length ? Promise.resolve() : this.INIT_ARTICLES(),
      this.tags.length ? Promise.resolve() : this.INIT_TAGS()
    ]);
    this.loadComplete();
  },
  methods: {
    ...mapActions({
      INIT_ARTICLES: 'articles/INIT_ARTICLES',
      INIT_TAGS: 'tags/INIT_TAGS',
      loadComplete: 'loadComplete'
    })
  }
};
</script>

<style scoped>
.column .article-card {
  height: 100%;
}
</style>
