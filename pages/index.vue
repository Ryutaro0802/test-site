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
// import BlTwitterButton from '~/components/atoms/bl-twitter_button';
// import BlIconRss from '~/components/atoms/bl-icon_rss';
import BlArticleCard from '~/components/molecules/bl-article_card';

export default {
  // layout: 'top',
  components: {
    BlArticleCard
  },
  computed: {
    ...mapGetters(['articles', 'tags', 'isLoaded'])
  },
  async mounted() {
    console.log('beforeArticles', this.articles.length);
    console.log('beforeTagas', this.tags.length);
    await Promise.all([
      this.articles.length
        ? Promise.resolve()
        : this.$store.dispatch('INIT_ARTICLES'),
      this.tags.length ? Promise.resolve() : this.$store.dispatch('INIT_TAGS')
    ]);
    // await this.$nextTick();
    console.log('aftetrArticles', this.articles.length);
    console.log('afterTags', this.tags.length);
    this.loadComplete();
  },
  methods: {
    ...mapActions(['loadComplete'])
  }
};
</script>

<style scoped>
.column .article-card {
  height: 100%;
}
</style>
