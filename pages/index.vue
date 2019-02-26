<template>
  <div>
    <nuxt-link v-for="article in articles" :key="article.key" :to="'/articles/' + article.id" class="box">
      <article class="media">
        <!-- TODO: 画像が出せるようになったらだそう -->
        <!-- <div class="media-left">
          <figure class="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
          </figure>
        </div> -->
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ article.title }}</strong> <small>{{ article.updatedAt }}</small>
              <br>
              {{ article.text }}
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item" aria-label="reply">
                <span class="icon is-small">
                  <i class="fas fa-reply" aria-hidden="true" />
                </span>
              </a>
              <a class="level-item" aria-label="retweet">
                <span class="icon is-small">
                  <i class="fas fa-retweet" aria-hidden="true" />
                </span>
              </a>
              <a class="level-item" aria-label="like">
                <span class="icon is-small">
                  <i class="fas fa-heart" aria-hidden="true" />
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
import { mapGetters, mapActions } from 'vuex';

export default {
  async mounted() {
    await this.$store.dispatch('INIT_ARTICLES');
    this.loadComplete();
  },
  computed: {
    ...mapGetters(['articles'])
  },
  methods: {
    ...mapActions(['loadComplete'])
  }
};
</script>

<style>
</style>
