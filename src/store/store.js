import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  distance: true
}
const mutations = {
  increment (state) {
    state.count++
  },
  mutationsAddCount (state, n = 0) {
    return (state.count += n)
  },
  mutationsReduceCount (state, n = 0) {
    return (state.count -= n)
  },
  changeDistance (state) {
    state.distance = !state.distance
  }
}
const actions = {
  actionsAddCount (context, n = 0) {
    console.log(context)
    return context.commit('mutationsAddCount', n)
  },
  actionsReduceCount ({commit}, n = 0) {
    return commit('mutationsReduceCount', n)
  }
}
const getters = {
  getterCount (state) {
    return (state.count += 10)
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
export default store
