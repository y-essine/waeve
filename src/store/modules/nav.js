export default {
    namespaced: true,
    state: () => ({
        currentRoute: ''
    }),
    mutations: {
        setCurrentRoute(state, route) {
            state.currentRoute = route;
        }
    },
    actions: {
        setCurrentRoute({ commit }, route) {
            commit('setCurrentRoute', route);
        }
    },
    getters: {
        isHome: (state) => state.currentRoute === 'Home',
        isExplore: (state) => state.currentRoute === 'Explore',
        isSettings: (state) => state.currentRoute === 'Settings'
    }
};
