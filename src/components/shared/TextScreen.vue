<template>
    <div class="text-screen fs-18 fw-400 lh-160 pt-20">
        <slot />
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.text-screen {
    border-top: 1px solid rgba(36 48 100 / 0.1);

    @include media('<tablet') {
        font-size: 12px;
        padding-top: 15px;
    }
}
</style>
