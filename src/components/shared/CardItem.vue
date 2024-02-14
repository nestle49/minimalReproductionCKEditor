<template>
    <component
        :is="tag"
        class="card br-20 position-relative"
        :class="{ 'card--no-shadow': noShadow }"
    >
        <CloseButton
            v-if="isCanBeClosed"
            @click="emit('close')"
        />

        <slot />
    </component>
</template>

<script setup lang="ts">
import CloseButton from '@/components/shared/CloseButton.vue'

interface Props {
    isCanBeClosed?: boolean
    tag?: string
    noShadow?: boolean
}

withDefaults(defineProps<Props>(), {
    isCanBeClosed: false,
    tag: 'div',
    noShadow: false
})

const emit = defineEmits<(event: 'close') => void>()
</script>

<style lang="scss" scoped>
.card {
    --card-padding: 30px;

    background: var(--ui-light);
    box-shadow:
        7px 7px 20px 5px rgba(208 205 221 / 0.5),
        -10px -10px 30px rgba(255 255 255 / 0.15);
    padding: var(--card-padding);
    transition: 0.5s all ease;

    &--no-shadow {
        box-shadow: none;
        border: 1px solid var(--border);
    }

    @include media('<tablet') {
        --card-padding: 20px;
    }
}
</style>
