<template>
  <div>
    <h1 class="title is-1">
      記事の管理
    </h1>

    <table class="table">
      <thead>
        <tr>
          <th>タイトル</th>
          <th>本文</th>
          <th>削除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" :key="article.id">
          <th>{{ article.title }}</th>
          <td>
            {{ article.text }}
          </td>
          <td>
            <a href="#">Leicester City</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  layout: 'column2',
  middleware: 'authenticated',
  computed: {
    ...mapGetters(['articles'])
  },
  async created() {
    if (!this.articles.length) {
      await this.$store.dispatch('INIT_ARTICLES');
    }
  },
  methods: {
    ...mapActions(['callAuth', 'ADD_POST'])
  }
};
</script>

<style>
</style>
