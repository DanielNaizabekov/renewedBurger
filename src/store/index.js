import Vue from 'vue'
import Vuex from 'vuex'
import burger from './modules/burger'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    burger,
  },
})