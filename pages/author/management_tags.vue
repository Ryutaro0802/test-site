<template>
  <div>
    <h1 class="title is-3">
      タグの管理
    </h1>
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
    titleInput() {
      this.title = event.target.value;
    },
    textInput() {
      this.text = event.target.value;
    },
    ...mapActions(['callAuth'])
  }
};
</script>

<style>
</style>
