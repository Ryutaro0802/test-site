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
import BlAddTag from '~/components/organisms/BlAddTag';

export default {
  layout: 'column2',
  middleware: 'authenticated',
  components: {
    BlAddTag
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
    ...mapActions({
      ADD_TAG: 'tags/ADD_TAG',
      INIT_TAGS: 'tags/INIT_TAGS'
    })
  }
};
</script>
