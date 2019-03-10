<template>
  <div>
    <BlCard v-for="article in articles" :key="article.id">
      <template slot="cardContent">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">
              <nuxt-link :to="'/articles/' + article.id">
                {{ article.title }}
              </nuxt-link>
            </p>
          </div>
        </div>
        <div class="content">
          <p>
            {{ article.text }}
          </p>
          <BlTagList v-if="article.tags.length">
            <BlTag v-for="tag in article.tags" :key="tag.id">
              {{ tag.label }}
            </BlTag>
          </BlTagList>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </template>
    </BlCard>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BlCard from '~/components/atoms/bl-card';
import BlTagList from '~/components/atoms/bl-tag_list';
import BlTag from '~/components/atoms/bl-tag';

export default {
  components: {
    BlCard,
    BlTagList,
    BlTag
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
