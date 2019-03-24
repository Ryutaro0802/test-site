<template>
  <BlDividerBlock :key="article.id">
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
          <nuxt-link :to="`/articles/${article.id}`">
            {{ article.title }}
          </nuxt-link>
        </p>
      </div>
    </div>
    <div>{{ article.text }}</div>
    <BlTagList v-if="article.tags.length">
      <BlTag v-for="tag in article.tags" :key="tag.id">
        {{ tag.label }}
      </BlTag>
    </BlTagList>
    <time datetime="2016-1-1">{{ article.createdAt }}</time>
  </BlDividerBlock>
</template>
<script>
import BlTag from '~/components/atoms/bl-tag';
import BlTagList from '~/components/atoms/bl-tag_list';
import BlDividerBlock from '~/components/atoms/bl-divider_block';

export default {
  name: 'BlArticleBox',
  components: {
    BlTag,
    BlTagList,
    BlDividerBlock
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
