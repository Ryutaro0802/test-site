<template>
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
</template>

<script>
export default {
  name: 'BlHeadNav'
};
</script>

<style scoped>
.container {
  max-width: 1032px;
}
.navbar {
  margin-bottom: 20px;
}
</style>
