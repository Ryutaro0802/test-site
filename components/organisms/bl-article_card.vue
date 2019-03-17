<template>
  <div class="content">
    <BlCard :key="article.id">
      <template slot="cardContent">
        <div class="media">
          <div v-if="article.media" class="media-left">
            <figure class="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
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
          <div>{{ article.text }}</div>
          <BlTagList v-if="article.tags.length">
            <BlTag v-for="tag in article.tags" :key="tag.id">
              {{ tag.label }}
            </BlTag>
          </BlTagList>
          <time datetime="2016-1-1">{{ article.createdAt }}</time>
        </div>
      </template>
    </BlCard>
  </div>
</template>
<script>
import BlTag from '~/components/atoms/bl-tag';
import BlTagList from '~/components/atoms/bl-tag_list';
import BlCard from '~/components/atoms/bl-card';

export default {
  name: 'BlArticleBox',
  components: {
    BlTag,
    BlTagList,
    BlCard
  },
  props: {
    article: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
<style scoped>
.media-content {
  overflow: visible;
}
.title a {
  color: inherit;
}
</style>
