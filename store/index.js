import { firebaseMutations } from 'vuexfire';

export const state = () => ({
  isLoaded: false
});

export const getters = {
  isLoaded: state => state.isLoaded
};

export const mutations = {
  setIsLoaded(state, next) {
    state.isLoaded = !!next;
  },
  ...firebaseMutations
};

export const actions = {
  loadComplete({ commit }) {
    commit('setIsLoaded', true);
  }
};
