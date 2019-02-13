import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {

        isSidebar: ''
    },
    getters: {

    },
    mutations: {
        setSidebar(s, p) {
            s.isSidebar = p.isSidebar;
        },
    },
    actions: {

    } //end actions
});