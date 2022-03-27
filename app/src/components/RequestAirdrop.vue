<script setup>
import { useWallet } from 'solana-wallets-vue'
import { Connection, clusterApiUrl, LAMPORTS_PER_SOL, TransactionSignature } from '@solana/web3.js';
// import useUserSOLBalanceStore from '../stores/useUserSOLBalanceStore';

const { publicKey, connected, sendTransaction } = useWallet();
// const { getUserSOLBalance } = useUserSOLBalanceStore();

const onClick = async () => {
        if (!publicKey) {
            console.log('error', `Wallet not connected!`);
            return;
        }

        let signature = '';
        try {
            const connection = new Connection(clusterApiUrl('devnet'));

            signature = await connection.requestAirdrop(publicKey, LAMPORTS_PER_SOL);
            await connection.confirmTransaction(signature, 'confirmed');
            console.log("success");

            // getUserSOLBalance(publicKey, connection);
        } catch (error) {
            console.log('error', `Airdrop failed! ${error?.message}`, signature);
        }
    }
</script>

<template>
    <div>
        <button
            class="px-8 m-2 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ..."
            @click="onClick"
        >
            <span>
                Airdrop 1
            </span>
        </button>
    </div>
</template>
