<template>
  <div>
    <h1 class="title is-1">
      記事を書く
    </h1>

    <div v-if="!user">
      <a class="button" @click="callAuth">SignIn</a>
    </div>
    <template v-else>
      <form @submit.prevent="addPost">
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input
              v-model="title"
              class="input"
              type="text"
              name="title"
              required
              placeholder="Title"
              @input="titleInput"
            >
          </div>
        </div>

        <div class="field">
          <label class="label">Text</label>
          <div class="control">
            <textarea
              v-model="text"
              class="textarea"
              name="text"
              required
              placeholder="Text"
              @input="textInput"
            />
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
    </template>
  </div>
</template>

<script>
// import dayjs from 'dayjs';
import { mapGetters, mapActions } from 'vuex';
import auth from '~/plugins/auth';

export default {
  layout: 'column2',
  data() {
    return {
      title: '',
      text: ''
    };
  },
  computed: {
    ...mapGetters(['user'])
  },
  async created() {
    if (this.user) {
      return;
    }
    const user = await auth();
    this.$store.commit('setUser', { user });
  },
  methods: {
    addPost(e) {
      e.preventDefault();
      this.ADD_POST({
        title: this.title,
        text: this.text,
        tags: [],
        createdAt: Date.now(),
        updatedAt: Date.now()
      });
      this.title = '';
      this.text = '';
    },
    titleInput() {
      this.title = event.target.value;
    },
    textInput() {
      this.text = event.target.value;
    },
    ...mapActions(['callAuth', 'ADD_POST'])
  }
};
</script>

<style>
</style>
