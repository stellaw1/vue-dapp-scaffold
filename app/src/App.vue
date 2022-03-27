<script setup>
import { useRoute } from 'vue-router';
import 'solana-wallets-vue/styles.css'
import AppBar from './components/AppBar';
import BasicPage from './pages/BasicPage'
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { initWallet } from 'solana-wallets-vue';

const route = useRoute()

const wallets = [
  new PhantomWalletAdapter(),
  new SlopeWalletAdapter(),
  new TorusWalletAdapter(),
  new LedgerWalletAdapter(),
];

initWallet({ wallets, autoConnect: true});
</script>

<template>
  <div class="w-full max-w-3xl lg:max-w-4xl mx-auto">

        <!-- AppBar -->
        <app-bar class="block"></app-bar>

        <!-- Main -->
        <main class="flex flex-col h-screen">
          <header>
              <title>Solana Scaffold Lite</title>
          </header>
          <router-view></router-view>
        </main>
    </div>
</template>
