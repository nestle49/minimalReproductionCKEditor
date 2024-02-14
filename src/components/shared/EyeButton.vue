<template>
    <button
        type="button"
        aria-label="eye on"
        class="cursor-pointer action"
        :class="{ active }"
        @click="change"
    >
        <SvgIcon
            name="eye-on"
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
    fill: var(--ui-secondary);

    &.active,
    &:hover {
        fill: #748aff;
    }
}
</style>
