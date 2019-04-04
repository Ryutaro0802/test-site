<template>
  <div>
    <h1 class="title is-3">
      記事の管理
    </h1>

    <table class="table">
      <thead>
        <tr>
          <th>タイトル</th>
          <th>本文</th>
          <th>投稿日時</th>
          <th>削除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" :key="article.id">
          <th>
            <nuxt-link :to="'/author/articles/' + article.id">
              {{ article.title }}
            </nuxt-link>
          </th>
          <td>{{ article.text }}</td>
          <td>{{ article.createdAt }}</td>
          <td>
            <a href="#" @click.prevent="deleteArticle(article.id)">
              <BlIconDelete />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BlIconDelete from '~/components/atoms/bl-icon_delete';

export default {
  layout: 'column2',
  middleware: 'authenticated',
  components: {
    BlIconDelete
  },
  computed: {
    ...mapGetters({
      articles: 'articles/articles'
    })
  },
  async created() {
    if (!this.articles.length) {
      await this.INIT_ARTICLES();
    }
  },
  methods: {
    deleteArticle(id) {
      this.DELETE_ARTICLE({ id });
    },
    ...mapActions({
      INIT_ARTICLES: 'articles/INIT_ARTICLES',
      DELETE_ARTICLE: 'articles/DELETE_ARTICLE'
    })
  }
};
</script>
