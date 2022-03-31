import { createStore } from 'vuex';

export const store = createStore({
    state () {
        return {
            autoConnect: true,
            userSOLBalance: 0
        }
    },
    mutations: {
        flip (state) {
            state.autoConnect = !state.autoConnect
        },
        setBalance (state, payload) {
            state.userSOLBalance = payload.balance
        },
        updateBalance (state, payload) {
            state.userSOLBalance += payload.balance
        }
    }
});
