import firebase from '~/plugins/firebase';

export const state = () => ({
  user: null
});

export const getters = {
  user: state => state.user
};

export const mutations = {
  setUser(state, { user }) {
    state.user = user;
  }
};

export const actions = {
  callAuth() {
    firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  },
  signOut() {
    firebase.auth().signOut();
  }
};
