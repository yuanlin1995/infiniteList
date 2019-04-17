import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const moduleA = {
  state: {},
  mutations: {}
}
const moduleB = {
  state: {},
  mutations: {}
}
const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})
export default store
