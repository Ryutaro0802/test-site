<template>
  <div class="navigation">
    <div class="left">
      <ul class="anchors">
        <li>
          <nuxt-link to="/" class="anchor">
            Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about" class="anchor">
            About
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="right" />
  </div>
</template>

<script>
export default {
  name: 'BlNavBar'
};
</script>

<style scoped>
.navigation {
  display: flex;
  border-bottom: 1px solid #d8d8d8;
  margin-bottom: 20px;
}
.left {
  flex-grow: 1;
}
.anchors {
  display: flex;
}
.anchors li {
  margin-right: 20px;
}
.anchor {
  color: inherit;
  padding: 15px 0;
  display: block;
}
</style>
