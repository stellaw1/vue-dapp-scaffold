<script setup>
import store from '../vuex'
import { useStore } from 'vuex';
import { useWallet } from 'solana-wallets-vue'
import { Connection, clusterApiUrl, LAMPORTS_PER_SOL } from '@solana/web3.js';

const { publicKey, connected, sendTransaction } = useWallet();

const SOLANA_NETWORK = 'devnet'; // should be env variable

const onClick = async () => {
        if (!publicKey) {
            console.log('error', `Wallet not connected!`);
            return;
        }

        let signature = '';
        try {
            const connection = new Connection(clusterApiUrl('devnet'));

            signature = await connection.requestAirdrop(publicKey.value, LAMPORTS_PER_SOL);
            await connection.confirmTransaction(signature, 'confirmed');
            let balance = await connection.getBalance(
                publicKey.value,
                'confirmed'
            );
            balance = balance / LAMPORTS_PER_SOL;
            store.commit("updateBalance", {balance: balance})
            console.log("success, balance is now", store.state.userSOLBalance);

        } catch (error) {
            console.log('error', `Airdrop failed! ${error?.message}`, signature);
        }
    }

// grab this once so we can reuse it everywhere else
const store = useStore();

function setBalance (balance) {
    store.commit('updateBalance', { balance });
}

async function requestAirdrop () {
    const { publicKey } = useWallet();

    if (!publicKey) {
        console.error('[requestAirdrop] public key not found');
        return;
    }

    // we can break out getting the connection + signature to a helper function to simplify error handling
    const connection = new Connection(clusetApiUrl(SOLANA_NETWORK));
    const signature = await connection.requestAirdrop(publicKey.value, LAMPORTS_PER_SOL);

    await connection.confirmTransaction(signature, 'confirmed'); // `'confirmed'` should be a constant somewhere

    const lamports = await connection.getBalance(publicKey.value, 'confirmed');
    const balance = lamports / LAMPORTS_PER_SOL;

    setBalance(balance);

    console.log(`[requestAirdrop] success, balance is now ${balance} sol`);
}
</script>

<template>
    <div>
        <button
            class="px-8 m-2 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ..."
            @click="requestAirdrop"
        >
            <span>
                Airdrop 1
            </span>
        </button>
    </div>
</template>
