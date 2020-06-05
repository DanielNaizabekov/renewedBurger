import Vue from 'vue';
import Vuex from 'vuex';
import burger from './modules/burger';
import requester from './requester';

Vue.use(Vuex);

export default new Vuex.Store({
  actions: requester,
  modules: {
    burger,
  },
})