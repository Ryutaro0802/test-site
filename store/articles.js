import firebase from '~/plugins/firebase';
import { firebaseAction } from 'vuexfire';

const firestore = firebase.firestore();
const articlesCollection = firestore.collection('articles');

export const state = () => ({
  articleId: null,
  articles: []
});

export const getters = {
  articles: (state, commit, rootState) => {
    const tags = rootState.tags.tags;
    return state.articles.map(article => {
      article.tags = tags.filter(tag => article.tagIds.includes(tag.id));
      return article;
    });
  },
  article: state =>
    state.articleId
      ? state.articles.find(article => article.id === state.articleId)
      : null
};

export const mutations = {
  setArticleId(state, { id }) {
    state.articleId = id;
  }
};

export const actions = {
  INIT_ARTICLES: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('articles', articlesCollection);
  }),
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
      tags: payload.article.tags,
      createdAt: payload.article.createdAt,
      updatedAt: payload.article.updatedAt
    });
  })
};
