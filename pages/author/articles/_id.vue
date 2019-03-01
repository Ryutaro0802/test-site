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
          >
        </div>
      </div>

      <div class="field">
        <label class="label">Text</label>
        <div class="control">
          <textarea v-model="articleText" class="textarea" name="text" required placeholder="Text" />
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

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
        return this.article.title;
      },
      set(title) {
        this.title = title;
      }
    },
    articleText: {
      get() {
        return this.article.text;
      },
      set(text) {
        this.text = text;
      }
    },
    ...mapGetters(['article'])
  },
  created() {
    this.setArticleId({ id: this.$route.params.id });
  },
  methods: {
    editArticle() {
      if (!this.title || !this.text) {
        return;
      }
      this.EDIT_ARTICLE({
        id: this.$route.params.id,
        article: {
          title: this.title,
          text: this.text,
          tags: this.article.tags,
          createdAt: this.article.createdAt,
          updatedAt: new Date()
        }
      });
    },
    ...mapMutations(['setArticleId']),
    ...mapActions(['EDIT_ARTICLE'])
  }
};
</script>
