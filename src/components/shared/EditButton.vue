<template>
    <button
        type="button"
        aria-label="edit"
        class="cursor-pointer action"
        :class="{ active }"
        @click="change"
    >
        TEST
    </button>
</template>

<script lang="ts" setup>
interface Props {
    active?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    active: false
})

const emit = defineEmits<(event: 'change', val: boolean) => void>()
const change = () => emit('change', !props.active)
</script>

<style lang="scss" scoped>
.action {
    fill: var(--ui-secondary);

    &.active,
    &:hover {
        fill: #ff8da9;
    }
}
</style>
