<template>
  <div>
    <!-- START NAV -->
    <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item brand-text" href="../">
            AuthorPage
          </a>
          <div class="navbar-burger burger" data-target="navMenu">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenu" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="admin.html">
              記事を書く
            </a>
            <a class="navbar-item" href="admin.html">
              記事の管理
            </a>
            <a class="navbar-item" href="admin.html">
              タグの管理
            </a>
            <a class="navbar-item" href="admin.html">
              リソースアップロード
            </a>
          </div>
        </div>
      </div>
    </nav>
    <!-- END NAV -->

    <div class="container">
      <div class="columns">
        <!-- Sub Start -->
        <div class="column is-3 ">
          <aside class="menu is-hidden-mobile">
            <ul class="menu-list">
              <li>
                <nuxt-link to="/author/write_article" class="is-active">
                  記事を書く
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/author/management_articles">
                  記事の管理
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/author/management_tags">
                  タグ管理
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/author/upload_resource">
                  リソースアップロード
                </nuxt-link>
              </li>
            </ul>
          </aside>
        </div>
        <!-- Sub End -->
        <!-- Main Start -->
        <div class="column is-9">
          <nuxt />
        </div>
        <!-- Main End -->
      </div>
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
