<template>
  <div class="columns">
    <div class="column">
      <BlInput
        v-model="markdown"
        type="textarea"
        @input="markdownInput"
      />
    </div>
    <div class="column" v-html="preview" />
  </div>
</template>
<script>
import marked from 'marked';
import BlInput from '~/components/atoms/bl-input';

export default {
  components: {
    BlInput
  },
  data() {
    return {
      markdown: ''
    };
  },
  computed: {
    preview() {
      return marked(this.markdown);
    }
  },
  methods: {
    markdownInput() {
      this.$emit('input', this.markdown);
    }
  }
};
</script>
