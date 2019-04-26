import firebase from '~/plugins/firebase';
import { firebaseAction } from 'vuexfire';
import dayjs from 'dayjs';

const firestore = firebase.firestore();
const articlesCollection = firestore.collection('articles');

export const state = () => ({
  articles: [],
  article: null
});

export const getters = {
  articles: (state, commit, rootState) => {
    const tags = rootState.tags.tags;
    return state.articles.map((article) => {
      article.tags = tags.filter(tag => article.tagIds.includes(tag.id));
      article.createdAt = dayjs(article.createdAt.nanoseconds).format(
        'YYYY-MM-DD'
      );
      article.updatedAt = dayjs(article.updatedAt.nanoseconds).format(
        'YYYY-MM-DD'
      );
      return article;
    });
  },
  article: state => state.article
};

export const mutations = {
  saveArticle(state, { article }) {
    state.article = article;
  }
};

export const actions = {
  INIT_ARTICLES: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('articles', articlesCollection);
  }),
  async INIT_SINGLE_ARTICLE({ commit }, { id }) {
    const snapshot = await articlesCollection.doc(id).get();
    commit('saveArticle', { article: snapshot.data() });
  },
  ADD_ARTICLE: firebaseAction(
    (ctx, { title, text, tagIds, createdAt, updatedAt }) => {
      articlesCollection.add({
        title,
        text,
        tagIds,
        createdAt,
        updatedAt
      });
    }
  ),
  DELETE_ARTICLE: firebaseAction((ctx, { id }) => {
    articlesCollection.doc(id).delete();
  }),
  EDIT_ARTICLE: firebaseAction((ctx, payload) => {
    articlesCollection.doc(payload.id).set({
      title: payload.article.title,
      text: payload.article.text,
      tagIds: payload.article.tagIds,
      createdAt: payload.article.createdAt,
      updatedAt: payload.article.updatedAt
    });
  })
};
