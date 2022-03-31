import { createStore } from 'vuex';

export const store = createStore({
    state () {
        return {
            autoConnect: true
        }
    },
    mutations: {
        flip (state) {
            state.autoConnect = !state.autoConnect
        }
    }
});
