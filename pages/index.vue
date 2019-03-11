<template>
  <div>
    <BlArticleCard
      v-for="article in articles"
      :key="article.id"
      :article="article"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BlArticleCard from '~/components/organisms/bl-article_card';

export default {
  components: {
    BlArticleCard
  },
  computed: {
    ...mapGetters(['articles'])
  },
  async created() {
    if (!this.articles.length) {
      await this.$store.dispatch('INIT_ARTICLES');
    }
    this.loadComplete();
  },
  methods: {
    ...mapActions(['loadComplete'])
  }
};
</script>
