<template>
  <div>
    <h1 class="title is-3">
      タグの管理
    </h1>
    <div>
      <span v-for="tag in tags" :key="tag.id" class="tag is-primary">{{ tag.label }}</span>
    </div>
    <form @submit.prevent="tagSubmit">
      <BlInput v-model="newTag" placeholder="新しいタグ" />
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BlInput from '~/components/atoms/bl-input';

export default {
  layout: 'column2',
  middleware: 'authenticated',
  components: {
    BlInput
  },
  data() {
    return {
      newTag: ''
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
    tagSubmit() {
      this.ADD_TAG({
        label: this.newTag
      });
      this.newTag = '';
    },
    ...mapActions(['ADD_TAG'])
  }
};
</script>

<style>
</style>
