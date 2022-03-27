<script setup>
import { useWallet } from 'solana-wallets-vue'
import { sign } from 'tweetnacl';

const { publicKey, signMessage } = useWallet();

const onClick = async () => {
    try {
        // `publicKey` will be null if the wallet isn't connected
        if (!publicKey) throw new Error('Wallet not connected!');
        // `signMessage` will be undefined if the wallet doesn't support it
        if (!signMessage) throw new Error('Wallet does not support message signing!');
        // Encode anything as bytes
        const message = new TextEncoder().encode('Hello, world!');
        // Sign the bytes using the wallet
        const signature = await signMessage.value(message);
        // Verify that the bytes were signed using the private key that matches the known public key
        if (!sign.detached.verify(message, signature, publicKey.value.toBytes())) throw new Error('Invalid signature!');
        console.log("success")
        // notify({ type: 'success', message: 'Sign message successful!', txid: bs58.encode(signature) });
    } catch (error) {
        // notify({ type: 'error', message: `Sign Message failed!`, description: error?.message });
        console.log('error', `Sign Message failed! ${error?.message}`);
    }
}
</script>

<template>
    <div>
        <button
            class="px-4 py-2 rounded-full font-semibold"
            @click="onClick" :disabled="! publicKey"
        >
            Sign Message
        </button>
    </div>
</template>
