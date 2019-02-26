<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item">
          <h1 class="title is-1">
            Test Site
          </h1>
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
</template>

<script>
export default {
  props: ['user']
};
</script>

<style>
.navbar {
  margin-bottom: 20px;
}
</style>
