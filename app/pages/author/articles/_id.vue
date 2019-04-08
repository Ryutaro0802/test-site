<template>
  <div>
    <h1 class="title is-3">
      記事の編集
    </h1>

    <form @submit.prevent="editArticle">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input
            v-model="articleTitle"
            class="input"
            type="text"
            name="title"
            required
            placeholder="Title"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Text</label>
        <div class="control">
          <textarea
            v-model="articleText"
            class="textarea"
            name="text"
            required
            placeholder="Text"
          />
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">
            送信
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase';
import { mapGetters, mapActions } from 'vuex';

export default {
  layout: 'column2',
  middleware: 'authenticated',
  data() {
    return {
      title: '',
      text: ''
    };
  },
  computed: {
    articleTitle: {
      get() {
        if (!this.article) {
          return '';
        }
        return this.article.title;
      },
      set(title) {
        this.title = title;
      }
    },
    articleText: {
      get() {
        if (!this.article) {
          return '';
        }
        return this.article.text;
      },
      set(text) {
        this.text = text;
      }
    },
    ...mapGetters({
      article: 'articles/article'
    })
  },
  async created() {
    const articleId = this.$route.params.id;
    await this.INIT_SINGLE_ARTICLE({ id: articleId });
    this.loadComplete();
  },
  methods: {
    editArticle() {
      this.EDIT_ARTICLE({
        id: this.$route.params.id,
        article: {
          title: this.title || this.articleTitle,
          text: this.text || this.articleText,
          tagIds: this.article.tagIds,
          createdAt: this.article.createdAt,
          updatedAt: firebase.firestore.Timestamp.now()
        }
      });
    },
    ...mapActions({
      INIT_SINGLE_ARTICLE: 'articles/INIT_SINGLE_ARTICLE',
      EDIT_ARTICLE: 'articles/EDIT_ARTICLE',
      loadComplete: 'loadComplete'
    })
  }
};
</script>
