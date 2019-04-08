<template>
  <aside class="menu is-hidden-mobile">
    <ul class="menu-list">
      <SideNavItem
        v-for="(listItem, index) in listItems"
        :key="index"
        :list-item="listItem"
        :path="path"
      >
        {{ listItem.label }}
      </SideNavItem>
    </ul>
  </aside>
</template>

<script>
import SideNavItem from '~/app/components/organisms/side_nav_item';

export default {
  components: {
    SideNavItem
  },
  data() {
    return {
      // fixme もしいつかサイドナビを使いまわすときは考える
      listItems: {
        writeArticle: {
          label: '記事を書く',
          href: '/author/write_article'
        },
        managementArticle: {
          label: '記事の管理',
          href: '/author/management_articles'
        },
        managementTags: {
          label: 'タグ管理',
          href: '/author/management_tags'
        },
        uploadResource: {
          label: 'リソースアップロード',
          href: '/author/upload_resource'
        }
      },
      path: this.$route.path
    };
  },
  watch: {
    $route() {
      this.path = this.$route.path;
    }
  }
};
</script>
