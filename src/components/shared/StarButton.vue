<template>
    <button
        type="button"
        aria-label="favorites"
        class="cursor-pointer"
        @click="change"
    >
        TEST
    </button>
</template>

<script lang="ts" setup>
import SvgIcon from '@/components/shared/SvgIcon.vue'
interface Props {
    isActive?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    isActive: false
})

const emit = defineEmits<(event: 'change', val: boolean) => void>()
const change = () => emit('change', !props.isActive)
</script>
