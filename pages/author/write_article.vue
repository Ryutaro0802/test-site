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
          <BlInput v-model="text" placeholder="テキスト" type="textarea" />
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
          <button class="button is-link">
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// import dayjs from 'dayjs';
import { mapGetters, mapActions } from 'vuex';
import BlInput from '~/components/atoms/bl-input';
import BlCheckbox from '~/components/atoms/bl-checkbox';

export default {
  layout: 'column2',
  middleware: 'authenticated',
  components: {
    BlInput,
    BlCheckbox
  },
  data() {
    return {
      title: '',
      text: '',
      tagIds: []
    };
  },
  computed: {
    ...mapGetters(['tags'])
  },
  async created() {
    if (!this.tags.length) {
      await this.$store.dispatch('INIT_TAGS');
    }
  },
  methods: {
    addPost(e) {
      e.preventDefault();
      this.ADD_ARTICLE({
        title: this.title,
        text: this.text,
        tags: this.tagIds,
        createdAt: Date.now(),
        updatedAt: Date.now()
      });
      this.title = '';
      this.text = '';
      this.tagIds = [];
    },
    ...mapActions(['callAuth', 'ADD_ARTICLE'])
  }
};
</script>
