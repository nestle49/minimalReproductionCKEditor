<template>
    <button
        type="button"
        aria-label="discount"
        class="cursor-pointer action"
        :class="{ active }"
        @click="change"
    >
        <SvgIcon
            name="discount"
            :size="22"
            class="pe-none ease"
        />
    </button>
</template>

<script lang="ts" setup>
import SvgIcon from '@/components/shared/SvgIcon.vue'
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
    color: var(--ui-secondary);

    &.active,
    &:hover {
        color: #f25eff;
    }
}
</style>
