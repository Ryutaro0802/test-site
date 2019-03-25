import Vue from 'vue';
import Vuex from 'vuex';
import firebase from '~/plugins/firebase';
import { firebaseMutations, firebaseAction } from 'vuexfire';

const firestore = firebase.firestore();
const articlesCollection = firestore.collection('articles');
const tagsCollection = firestore.collection('tags');

// if (process.browser) {
//   const settings = { timestampsInSnapshots: true };
//   firestore.settings(settings);
// }

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      user: null,
      articleId: null,
      articles: [],
      tags: [],
      isLoaded: false
    }),
    getters: {
      user: state => state.user,
      articles: state => {
        return state.articles.map(article => {
          article.tags = state.tags.filter(tag => {
            return article.tagIds.includes(tag.id);
          });
          return article;
        });
      },
      tags: state => state.tags,
      article: state =>
        state.articleId
          ? state.articles.find(article => article.id === state.articleId)
          : null,
      isLoaded: state => state.isLoaded
    },
    mutations: {
      setIsLoaded(state, next) {
        state.isLoaded = !!next;
      },
      setUser(state, { user }) {
        state.user = user;
      },
      setArticleId(state, { id }) {
        state.articleId = id;
      },
      ...firebaseMutations
    },
    actions: {
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
      }),
      INIT_TAGS: firebaseAction(({ bindFirebaseRef }) => {
        bindFirebaseRef('tags', tagsCollection);
      }),
      ADD_TAG: firebaseAction((ctx, { label }) => {
        tagsCollection.add({
          label
        });
      }),
      DELETE_TAG: firebaseAction((ctx, { id }) => {
        tagsCollection.doc(id).delete();
      }),
      callAuth() {
        firebase
          .auth()
          .signInWithRedirect(new firebase.auth.GoogleAuthProvider());
      },
      signOut() {
        firebase.auth().signOut();
      },
      loadComplete({ commit }) {
        commit('setIsLoaded', true);
      }
    }
  });
};

export default createStore;
