<template>
    <div>
       <nuxt-link to="/articles/" class="box" v-for="article in articles" :key="article.key">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ article.title }}</strong> <small>@johnsmith</small> <small>31m</small>
                <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item" aria-label="reply">
                  <span class="icon is-small">
                    <i class="fas fa-reply" aria-hidden="true"></i>
                  </span>
                </a>
                <a class="level-item" aria-label="retweet">
                  <span class="icon is-small">
                    <i class="fas fa-retweet" aria-hidden="true"></i>
                  </span>
                </a>
                <a class="level-item" aria-label="like">
                  <span class="icon is-small">
                    <i class="fas fa-heart" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
      </nuxt-link>
    </div>
</template>

<script>
const articles = [
  {
    id: 0,
    title: 'title'
  },
  {
    id: 1,
    title: 'title'
  },
  {
    id: 2,
    title: 'title'
  }
]
export default {
  data() {
    return {
      articles
    }
  }
}
</script>

<style>
</style>
