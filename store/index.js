import Vue from 'vue';
import Vuex from 'vuex';
import firebase from '~/plugins/firebase';
import { firebaseMutations, firebaseAction } from 'vuexfire';
const firestore = firebase.firestore();
const articlesCollection = firestore.collection('articles');

// if (process.browser) {
//   const settings = { timestampsInSnapshots: true };
//   firestore.settings(settings);
// }

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      user: null,
      article: null,
      articles: [],
      isLoaded: false
    }),
    getters: {
      user: state => state.user,
      articles: state => state.articles,
      isLoaded: state => state.isLoaded
    },
    mutations: {
      setIsLoaded(state, next) {
        state.isLoaded = !!next;
      },
      setUser(state, { user }) {
        state.user = user;
      },
      ...firebaseMutations
    },
    actions: {
      INIT_ARTICLES: firebaseAction(({ bindFirebaseRef }) => {
        bindFirebaseRef('articles', articlesCollection);
      }),
      ADD_POST: firebaseAction(
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
