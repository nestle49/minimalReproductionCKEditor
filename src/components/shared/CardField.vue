<template>
    <div
        class="card-field border-box"
        :class="{
            'card-field--column-on-mobile': isColumnOnMobile && !isReverseOnMobile,
            'card-field--reverse-column-on-mobile': isColumnOnMobile && isReverseOnMobile,
            'card-field--row-on-mobile': !isColumnOnMobile && !isReverseOnMobile,
            'card-field--reverse-row-on-mobile': !isColumnOnMobile && isReverseOnMobile
        }"
    >
        <slot />
    </div>
</template>

<script lang="ts" setup>
interface Props {
    isColumnOnMobile?: boolean
    isReverseOnMobile?: boolean
}

withDefaults(defineProps<Props>(), {
    isColumnOnMobile: true
})
</script>

<style lang="scss" scoped>
.card-field {
    gap: 15px;

    @include media('<tablet') {
        min-width: 100%;
        gap: 5px;
    }

    &--column-on-mobile {
        @include media('<tablet') {
            flex-direction: column;
            align-items: flex-start;
        }
    }

    &--reverse-column-on-mobile {
        @include media('<tablet') {
            flex-direction: column-reverse;
            align-items: flex-start;
        }
    }

    &--row-on-mobile {
        @include media('<tablet') {
            display: block;
        }
    }
}
</style>
