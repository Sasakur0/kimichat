import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: null,
    roleId: null,
    token: null
  },
  mutations: {
    SAVE_ROLE_ID(state, roleId) {
      state.roleId = roleId;
    },
    SAVE_TOKEN(state, token) {
      state.token = token;
    },
    SAVE_USER_ID(state, userId) {
      state.userId = userId;
    },
    SET_USER_ID(state, userId) {
      state.userId = userId;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
  },
  actions: {
    saveRoleId({ commit }, roleId) {
      commit('SAVE_ROLE_ID', roleId);
    },
    saveToken({ commit }, token) {
      commit('SAVE_TOKEN', token);
    },
    saveUserId({ commit }, userId) {
      commit('SAVE_USER_ID', userId);
    },
    logout({ commit }) {
      commit('SET_USER_ID', null);
      commit('SET_TOKEN', null);
    },
  },
  plugins: [createPersistedState()]
});
