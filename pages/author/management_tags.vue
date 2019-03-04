<template>
  <div>
    <h1 class="title is-3">
      タグの管理
    </h1>
    <span v-for="tag in tags" :key="tag.id" class="tag is-primary">
      {{ tag.label }}
    </span>
    <input class="input" type="text" placeholder="新しいタグ">
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  layout: 'column2',
  middleware: 'authenticated',
  computed: {
    ...mapGetters(['tags'])
  },
  async created() {
    if (!this.tags.length) {
      await this.$store.dispatch('INIT_TAGS');
    }
  }
};
</script>

<style>
</style>
