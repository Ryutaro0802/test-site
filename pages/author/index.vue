<template>
  <div>
    <h1 class="title is-1">
      Author
    </h1>

    <div v-if="!user">
      <a class="button" @click="callAuth">SignIn</a>
    </div>
    <template v-else>
      <form @submit.prevent="addPost">
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input class="input" type="text" name="title" placeholder="Title">
          </div>
        </div>

        <div class="field">
          <label class="label">Text</label>
          <div class="control">
            <textarea class="textarea" name="text" placeholder="Text" />
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
import { mapGetters, mapActions } from 'vuex';
import auth from '~/plugins/auth';

export default {
  // data() {
  // 	return {
  // 	};
  // }
  async mounted() {
    if (this.user) {
      return;
    }
    const user = await auth();
    this.$store.commit('setUser', { user });
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    addPost(e) {
      e.preventDefault();
      const formElement = e.target;
      this.ADD_POST({
        title: formElement.title.value,
        text: formElement.text.value,
        tags: [],
        createdAt: '',
        updatedAt: ''
      });
    },
    ...mapActions(['callAuth', 'ADD_POST'])
  }
};
</script>

<style>
</style>
