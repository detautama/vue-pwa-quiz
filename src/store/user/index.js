import firebase from '@/firebase';
import { SET_PROFILE } from './mutations';


const state = {
  profile: {},
  loggedIn: false
};

const getters = {
  profile: ({profile}) => profile,
  loggedIn: ({loggedIn}) => loggedIn
};

const mutations = {
  [SET_PROFILE](state, profile) {
    state.loggedIn = true,
    state.profile = {
      name: profile.displayName,
      picture: profile.photoURL
    }
  }
};

const actions = {
  async login({commit}) {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      commit(SET_PROFILE, result.user)
    } catch(error) {
      console.log(error);
    }
  },
  async logout() {
    try {
      await firebase.auth.signOut();
    } catch(error) {
      console.log(error)
    }
  },
  test() {
    alert('test')
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};