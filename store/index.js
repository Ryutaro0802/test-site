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
      articles: state => state.articles,
      tags: state => state.tags,
      article: state => {
        return state.articleId
          ? state.articles.find(article => article.id === state.articleId)
          : null;
      },
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
        (ctx, { title, text, tags, createdAt, updatedAt }) => {
          articlesCollection.add({
            title,
            text,
            tags,
            createdAt,
            updatedAt
          });
        }
      ),
      DELETE_ARTICLE: firebaseAction((ctx, { id }) => {
        articlesCollection.doc(id).delete();
      }),
      EDIT_ARTICLE: firebaseAction(
        (ctx, { id }, { title, text, tags, createdAt, updatedAt }) => {
          articlesCollection.doc(id).set({
            title,
            text,
            tags,
            createdAt,
            updatedAt
          });
        }
      ),
      INIT_TAGS: firebaseAction(({ bindFirebaseRef }) => {
        bindFirebaseRef('tags', tagsCollection);
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
