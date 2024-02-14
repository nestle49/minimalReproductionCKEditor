<template>
    <span class="slot-content d-inline-flex">
        <slot />
    </span>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.slot-content {
    @include media('<tablet') {
        font-size: 12px;
        line-height: 1.2;
    }
}
</style>
