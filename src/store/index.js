import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isNavOpen: false,
        tabIndex: 0
    },
    mutations: {
        toggleNav () {
            this.state.isNavOpen = !this.state.isNavOpen
        },
        setTabIndex (state, index) {
            this.state.tabIndex = index
        }
    },
    actions: {},
    modules: {}
})
