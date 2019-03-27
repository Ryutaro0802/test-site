import { firebaseMutations } from 'vuexfire';
import firebase from '~/plugins/firebase';

export const state = () => ({
  isLoaded: false,
  user: null
});

export const getters = {
  isLoaded: state => state.isLoaded,
  user: state => state.user
};

export const mutations = {
  setIsLoaded(state, next) {
    state.isLoaded = !!next;
  },
  setUser(state, { user }) {
    state.user = user;
  },
  ...firebaseMutations
};

export const actions = {
  loadComplete({ commit }) {
    commit('setIsLoaded', true);
  },
  callAuth() {
    firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  },
  signOut() {
    firebase.auth().signOut();
  }
};
