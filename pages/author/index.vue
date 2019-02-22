<template>
  <div>
    <h1 class="title is-1">
      Author
    </h1>

    <div>
      <a class="button" @click="callAuth">SignIn</a>
    </div>

    <form action>
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input">
        </div>
      </div>

      <div class="field">
        <label class="label">Text</label>
        <div class="control">
          <textarea class="textarea" placeholder="Textarea" />
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
    console.log(user);

    this.$store.commit('setUser', { user });
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['callAuth'])
  }
};
</script>

<style>
</style>
