<script setup>
import 'solana-wallets-vue/styles.css'
import AppBar from './components/AppBar';
import SignMessage from './components/SignMessage';
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { initWallet, useWallet } from 'solana-wallets-vue';
// import { initWorkspace } from '@/composables'

const wallets = [
  new PhantomWalletAdapter(),
  new SlopeWalletAdapter(),
  new TorusWalletAdapter(),
  new LedgerWalletAdapter(),
];
initWallet({ wallets, autoConnect: true});
// initWorkspace()
</script>

<template>
  <div class="w-full max-w-3xl lg:max-w-4xl mx-auto">

        <!-- AppBar -->
        <app-bar class="block"></app-bar>

        <!-- Main -->
        <main class="flex-1 border-r border-l ml-20 md:ml-64 min-h-screen">
          <header class="flex space-x-6 items-center justify-between px-8 py-4 border-b">
              <div class="text-xl font-bold">basics</div>
          </header>
          <!-- SignMessage -->
          <sign-message></sign-message>
        </main>
    </div>
</template>
