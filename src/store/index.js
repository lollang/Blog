import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isNavOpen: false
    },
    mutations: {
        toggleNav () {
            this.state.isNavOpen = !this.state.isNavOpen
        }
    },
    actions: {},
    modules: {}
})
