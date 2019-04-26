<template>
  <li>
    <nuxt-link :to="listItem.href" :class="classObject">
      <slot />
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    listItem: {
      type: Object,
      default: () => {}
    },
    path: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      pathName: ''
    };
  },
  computed: {
    classObject() {
      const href = this.listItem.href;
      return {
        'is-active': href === this.path
      };
    }
  }
};
</script>
