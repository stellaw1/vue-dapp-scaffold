<script>
import { WalletMultiButton } from 'solana-wallets-vue';
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { initWallet } from 'solana-wallets-vue';

const wallets = {
  wallets: [
    new PhantomWalletAdapter(),
    new SlopeWalletAdapter(),
    new TorusWalletAdapter(),
    new LedgerWalletAdapter(),
  ],
  autoConnect: true,
};

initWallet(wallets);

export default {
  name: 'App',
  components: {
    WalletMultiButton
  }
}
</script>

<template>
  <wallet-multi-button></wallet-multi-button>
</template>
