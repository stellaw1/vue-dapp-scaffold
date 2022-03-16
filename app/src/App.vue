<script setup>
import { WalletMultiButton } from 'solana-wallets-vue';
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { initWallet, useWallet } from 'solana-wallets-vue';

const wallets = {
  wallets: [
    new PhantomWalletAdapter(),
    new SlopeWalletAdapter(),
    new TorusWalletAdapter(),
    new LedgerWalletAdapter(),
  ]
};
initWallet(wallets);

const { connected, wallet, publicKey } = useWallet();
</script>

<template>
  <div>
    <p v-if="connected">Wallet with public key {{publicKey}} successfully connected!</p>
    <div v-else>
      <wallet-multi-button></wallet-multi-button>
    </div>
  </div>
</template>
