import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import quiz from './quiz'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    awesome:true
  },

  modules: {
    user,
    quiz
  }
});

export default store;