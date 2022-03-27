// CSS
import 'solana-wallets-vue/styles.css'
import './main.css'

// Routing
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// // Create a new store instance.
// import { createStore } from 'vuex'

// const UserSOLBalanceStore = createStore({
//   state () {
//     return {
//       balance: 0
//     }
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })


// Create App
import { createApp } from 'vue'
import App from './App.vue'
createApp(App).use(router).mount('#app')
// .use(UserSOLBalanceStore)