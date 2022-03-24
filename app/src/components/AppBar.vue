<script setup>
import { WalletMultiButton, useWallet } from 'solana-wallets-vue'
const { connected } = useWallet();
</script>

<template>
  <div class="bg-gray-100">
    <nav class=" px-6 py-8 mx-auto md:flex md:justify-between md:items-center h-44">
      <div class="flex items-center justify-between">
        <router-link to="/" class="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400">
          Solana
        </router-link>
        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex md:hidden">
          <button
            type="button"
            class="
              text-gray-800
              hover:text-gray-400
              focus:outline-none focus:text-gray-400
            "
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>


      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
        <li class="text-lg font-bold text-gray-800 hover:text-blue-400">
          Home
        </li>
        <li class="text-lg font-bold text-gray-800 hover:text-blue-400">
          Basics
        </li>
        <li>
          <div class="fixed bottom-8 right-8 md:static w-48 md:w-full">
            <wallet-multi-button></wallet-multi-button>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>