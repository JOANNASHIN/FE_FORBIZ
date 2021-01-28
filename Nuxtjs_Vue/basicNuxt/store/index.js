import Vuex from "vuex";
import Vue from "vue";
import globalTest from "~/mixin.js/global.js";
Vue.mixin(globalTest);

const store = () => new Vuex.Store({
    state: {
        counter: 0
    },

    mutations: {
        increment: (state) => {
            state.counter++;
        }
    }
})

export default store;