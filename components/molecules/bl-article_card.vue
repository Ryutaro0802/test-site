<template>
  <div>
    <BlIndexCard :link-to="`/articles/${article.id}`" class="index-card">
      <template v-slot:image>
        <img src="https://dummyimage.com/328x174/474747/474747" alt="" />
      </template>
      <template v-slot:contents>
        <p class="article-title">
          {{ article.title }}
        </p>
        <p class="article-text">
          {{ markdownToText }}
        </p>
        <BlTagList>
          <BlTag v-for="tag in article.tags" :key="tag.id">
            {{ tag.label }}
          </BlTag>
        </BlTagList>
      </template>
      <template v-slot:sub>
        <p class="article-sub-text">
          {{ article.createdAt }}
        </p>
      </template>
    </BlIndexCard>
  </div>
</template>

<script>
import marked from 'marked';
import BlTag from '~/components/atoms/bl-tag';
import BlTagList from '~/components/atoms/bl-tag_list';
import BlIndexCard from '~/components/atoms/bl-index_card';

export default {
  name: 'BlArticleCard',
  components: {
    BlTag,
    BlTagList,
    BlIndexCard
  },
  props: {
    article: {
      type: Object,
      default: () => {}
    },
    tags: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      formattedArticle: this.article
    };
  },
  computed: {
    markdownToText() {
      const text = this.article.text;
      if (!text) {
        return '';
      }
      const markupString = marked(text);
      // markupを置換してタグを削除
      return markupString.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '');
    }
  }
  // created() {
  //   if (this.article.tags.length) {
  //     const newTags = this.article.tags.map(articleTag => {
  //       console.log(articleTag);
  //       return this.tags.find(tag => tag.id === articleTag);
  //     });
  //     this.article.tags = newTags;
  //   }
  // }
};
</script>

<style scoped>
.index-card {
  height: 100%;
}
.article-title {
  font-size: 26px;
  font-weight: bold;
}
.article-text {
  color: #616161;
  font-size: 18px;
}
.article-sub-text {
  color: #8c8989;
}
</style>
