<template>
  <div>
    <h1 class="title is-3">
      記事を書く
    </h1>
    <form @submit.prevent="addPost">
      <div class="field">
        <label class="label">タイトル</label>
        <div class="control">
          <BlInput v-model="title" placeholder="タイトル" />
        </div>
      </div>
      <div class="field">
        <label class="label">テキスト</label>
        <div class="control">
          <BlWysiwygEditor v-model="text" />
        </div>
      </div>
      <div class="block">
        <div class="control">
          <BlCheckbox
            v-for="tag in tags"
            :key="tag.id"
            v-model="tagIds"
            :native-value="tag.id"
          >
            {{ tag.label }}
          </BlCheckbox>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <BlButton>送信</BlButton>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase';
import { mapGetters, mapActions } from 'vuex';
import BlInput from '~/components/atoms/bl-input';
import BlCheckbox from '~/components/atoms/BlCheckbox';
import BlButton from '~/components/atoms/BlButton';
import BlWysiwygEditor from '~/components/organisms/BlWysiwygEditor';

export default {
  layout: 'column2',
  middleware: 'authenticated',
  components: {
    BlInput,
    BlCheckbox,
    BlButton,
    BlWysiwygEditor
  },
  data() {
    return {
      title: '',
      text: '',
      tagIds: []
    };
  },
  computed: {
    ...mapGetters({
      tags: 'tags/tags'
    })
  },
  async created() {
    if (!this.tags.length) {
      await this.INIT_TAGS();
    }
  },
  methods: {
    addPost(e) {
      e.preventDefault();
      this.ADD_ARTICLE({
        title: this.title,
        text: this.text,
        tagIds: this.tagIds,
        createdAt: firebase.firestore.Timestamp.now(),
        updatedAt: firebase.firestore.Timestamp.now()
      });
      this.title = '';
      this.text = '';
      this.tagIds = [];
    },
    changeContent(html) {
      console.log(html);
    },
    ...mapActions({
      ADD_ARTICLE: 'articles/ADD_ARTICLE',
      INIT_TAGS: 'tags/INIT_TAGS'
    })
  }
};
</script>
