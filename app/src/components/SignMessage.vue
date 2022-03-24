<template>
    <div>
        <button
            class="px-4 py-2 rounded-full font-semibold"
            @click="send" :disabled="! publicKey"
        >
            <!-- <div className="hidden group-disabled:block">
                Wallet not connected
            </div> -->
            <span className="block group-disabled:hidden" > 
                Sign Message 
            </span>
        </button>
    </div>
</template>