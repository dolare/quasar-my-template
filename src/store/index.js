import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './user'
console.log(user)
Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      user
    },
    plugins: [
      createPersistedState({
        storage: window.localStorage,
        key: 'app',
        paths: [
          'user.token'
        ]
      })
    ]
  })
  return Store
}
