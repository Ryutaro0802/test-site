import firebase from '~/plugins/firebase';
import { firebaseAction } from 'vuexfire';

const firestore = firebase.firestore();
const articlesCollection = firestore.collection('articles');

export const state = () => ({
  articles: [],
  article: null
});

export const getters = {
  articles: (state, commit, rootState) => {
    const tags = rootState.tags.tags;
    return state.articles.map(article => {
      article.tags = tags.filter(tag => article.tagIds.includes(tag.id));
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
  INIT_SINGLE_ARTICLE({ commit }, { id }) {
    articlesCollection
      .doc(id)
      .get()
      .then(doc => {
        console.log(doc.exists);
        if (doc.exists) {
          console.log(doc.data());
        } else {
          console.log('No such document');
        }
      });
    // const article = await articlesCollection.doc(id).get().data();
    // commit('saveArticle', { article });
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
      tags: payload.article.tags,
      createdAt: payload.article.createdAt,
      updatedAt: payload.article.updatedAt
    });
  })
};
