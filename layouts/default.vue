<template>
  <div>
    <!-- START NAV -->
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link to="/" class="navbar-item">
            Test Site
          </nuxt-link>
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
    <!-- END NAV -->

    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['signOut'])
  }
};
</script>


<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
