<template>
  <div>
    <!-- <BlTwitterButton /> -->
    <!-- <BlIconRss /> -->
    <h2>
      LASTEST
    </h2>
    <div class="columns is-multiline">
      <div v-for="article in articles" :key="article.id" class="column">
        <BlCard>
          <template slot="cardImage">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
          </template>
          <template slot="cardContent">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">
                  <nuxt-link :to="`/articles/${article.id}`">
                    {{ article.title }}
                  </nuxt-link>
                </p>
              </div>
            </div>
            <div class="content">
              {{ article.text }} <a href="#">#css</a>
              <a href="#">#responsive</a>
              <br />
              <time datetime="2016-1-1">
                {{ article.createdAt }}
              </time>
            </div>
          </template>
        </BlCard>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BlCard from '~/components/atoms/bl-card';
// import BlTwitterButton from '~/components/atoms/bl-twitter_button';
// import BlIconRss from '~/components/atoms/bl-icon_rss';

export default {
  // layout: 'top',
  components: {
    BlCard
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
