import Vue from 'vue';
import Vuex from 'vuex';
import firebase from '~/plugins/firebase';
import { firebaseMutations, firebaseAction } from 'vuexfire';

// const firestore = firebase.firestore();
const db = firebase.database();
const memosRef = db.ref(`articles`);

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
      articles: state => state.memos,
      isLoaded: state => state.isLoaded
    },
    mutations: {
      setIsLoaded(state, next) {
        state.isLoaded = !!next;
      },
      setUser(state, { user }) {
        state.user = user;
      },
      setArticles(state, { articles }) {
        state.articles = articles;
      },
      ...firebaseMutations
    },
    actions: {
      INIT_MEMOS: firebaseAction(({ bindFirebaseRef }, uid) => {
        return new Promise((resolve, reject) => {
          bindFirebaseRef('memos', memosRef.child(uid), {
            readyCallback: () => {
              resolve();
            }
          });
        });
      }),
      SAVE_MEMOS: firebaseAction((ctx, { uid, memos }) => {
        memosRef.child(uid).set(memos);
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
