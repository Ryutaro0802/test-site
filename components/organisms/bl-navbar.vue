<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <BlLogo>
          memo.
        </BlLogo>
      </div>
      <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-end">
          <nuxt-link class="navbar-item is-active" to="/">
            Home
          </nuxt-link>
          <nuxt-link class="navbar-item" to="/about">
            About
          </nuxt-link>
          <a v-if="user" href="#" class="navbar-item" @click.prevent="signOut">
            Logout
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import BlLogo from '~/components/atoms/bl-logo';

export default {
  name: 'BlNavBar',
  components: {
    BlLogo
  },
  props: ['user']
};
</script>

<style>
.navbar {
  margin-bottom: 20px;
}
</style>
