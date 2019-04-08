<template>
  <div>
    <BlTagList>
      <BlTag
        v-for="tag in tags"
        :key="tag.id"
        closable
        @close="tagDelete({ id: tag.id })"
      >
        {{ tag.label }}
      </BlTag>
    </BlTagList>
    <form @submit.prevent="tagSubmit">
      <BlInput v-model="newTag" placeholder="新しいタグ" />
    </form>
  </div>
</template>
<script>
import BlInput from '~/components/atoms/bl-input';
import BlTagList from '~/components/atoms/bl-tag_list';
import BlTag from '~/components/atoms/bl-tag';
import { mapActions } from 'vuex';
export default {
  name: 'BlAddTWag',
  components: {
    BlInput,
    BlTagList,
    BlTag
  },
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      newTag: ''
    };
  },
  methods: {
    tagSubmit() {
      this.ADD_TAG({
        label: this.newTag
      });
      this.newTag = '';
    },
    tagDelete({ id }) {
      this.DELETE_TAG({ id });
    },
    ...mapActions(['ADD_TAG', 'DELETE_TAG'])
  }
};
</script>
