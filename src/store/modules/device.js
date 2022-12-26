export default {
    namespaced: true,
    state: {
        windowWidth: 0,
        windowHeight: 0,
        windowListener: null,
    },
    mutations: {
        setWindowWidth(state, width) {
            state.windowWidth = width;
        },
        setWindowHeight(state, height) {
            state.windowHeight = height;
        },
        setWindowListener(state, listener) {
            state.windowListener = listener;
        },
    },
    actions: {
        initWindowListener({ commit }) {
            commit('setWindowWidth', window.innerWidth);
            commit('setWindowHeight', window.innerHeight);
            const listener = () => {
                commit('setWindowWidth', window.innerWidth);
                commit('setWindowHeight', window.innerHeight);
            };
            window.addEventListener('resize', listener);
            commit('setWindowListener', listener);
        },
        destroyWindowListener({ state }) {
            window.removeEventListener('resize', state.windowListener);
        },
    },
    getters: {
        isMobile(state) {
            return state.windowWidth < 426;
        },
    },
};
