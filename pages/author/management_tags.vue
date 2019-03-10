<template>
  <div>
    <h1 class="title is-3">
      タグの管理
    </h1>
    <BlAddTag :tags="tags" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BlAddTag from '~/components/organisms/bl-add_tag';

export default {
  layout: 'column2',
  middleware: 'authenticated',
  components: {
    BlAddTag
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
    ...mapActions(['ADD_TAG'])
  }
};
</script>
