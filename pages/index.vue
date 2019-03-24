<template>
  <div>
    <!-- <BlTwitterButton /> -->
    <!-- <BlIconRss /> -->
    <div class="columns is-multiline">
      <div
        v-for="article in articles"
        :key="article.id"
        class="column is-one-third"
      >
        <!-- TODO loadedを使った実装に修正する -->
        <BlArticleCard
          v-if="articles.length && tags.length"
          :article="article"
          :tags="tags"
          class="article-card"
        />
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
  async created() {
    // TODO Pomise.allに書き直す
    if (!this.articles.length) {
      await this.$store.dispatch('INIT_ARTICLES');
    }
    if (!this.tags.length) {
      await this.$store.dispatch('INIT_TAGS');
    }
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
