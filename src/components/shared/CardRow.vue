<template>
    <li
        class="card-row d-flex"
        :class="{
            'card-row--first': first,
            'card-row--last': last,
            'card-row--large-padding': largePadding,
            'align-items-center': centered
        }"
        :style="{
            paddingTop: first || largePadding ? '' : `${paddingY}px`,
            paddingBottom: last || largePadding ? '' : `${paddingY}px`
        }"
    >
        <slot />
    </li>
</template>

<script lang="ts" setup>
interface Props {
    first?: boolean
    last?: boolean
    largePadding?: boolean
    centered?: boolean
    paddingY?: number
}

withDefaults(defineProps<Props>(), {
    centered: true,
    paddingY: 20
})
</script>

<style lang="scss" scoped>
.card-row {
    border-bottom: 1px solid rgba(36 48 100 / 0.1);

    @include media('<tablet') {
        padding-top: 15px;
        padding-bottom: 15px;
    }

    &--large-padding {
        padding-top: 35px;
        padding-bottom: 35px;

        @include media('<tablet') {
            padding-top: 15px;
            padding-bottom: 15px;
        }
    }

    &--first {
        padding-top: 0;
    }

    &--last {
        border: none;
        padding-bottom: 0;
    }
}
</style>
