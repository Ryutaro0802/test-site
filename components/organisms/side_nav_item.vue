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
      const pathName = window.location.pathname;
      return {
        'is-active': href === pathName
      };
    }
  }
};
</script>
