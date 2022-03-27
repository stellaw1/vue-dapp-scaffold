<script setup>
import 'solana-wallets-vue/styles.css'
import AppBar from './components/AppBar';
import SignMessage from './components/SignMessage';
import sendTransaction from './components/SendTransaction';
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { initWallet } from 'solana-wallets-vue';

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
        <main class="flex-1 border-r border-l min-h-screen">
          <header class="flex space-x-6 items-center justify-between px-8 py-4 border-b">
              <div class="text-xl font-bold">Basics</div>
          </header>
          <!-- SignMessage -->
          <sign-message></sign-message>
          <send-transaction></send-transaction>
        </main>
    </div>
</template>
