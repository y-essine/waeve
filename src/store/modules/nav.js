import { createStore } from 'vuex';

export default createStore({
    namespaced: true,
    state: {
        currentRoute: ''
    },
    mutations: {
        setCurrentRoute(state, route) {
            state.currentRoute = route;
        }
    },
    actions: {
        setCurrentRoute({ commit }, route) {
            commit('setCurrentRoute', route);
        }
    }
});
