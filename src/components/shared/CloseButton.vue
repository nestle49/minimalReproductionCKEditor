<template>
    <button
        type="button"
        aria-label="close"
        class="close-button position-absolute d-inline-flex justify-content-center align-items-center cursor-pointer"
    >
        <SvgIcon
            name="cross"
            :size="20"
            class="pe-none"
        />
    </button>
</template>

<script lang="ts" setup>
import SvgIcon from '@/components/shared/SvgIcon.vue'
</script>

<style lang="scss" scoped>
.close-button {
    width: 48px;
    height: 48px;
    top: 23px;
    right: 21px;
}
</style>
