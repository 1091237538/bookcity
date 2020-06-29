import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carts:[]
  },
  mutations: {
    addCart(state,val){
      this.state.carts.push(val)
    }
  },
  actions: {
  },
  modules: {
  }
})
