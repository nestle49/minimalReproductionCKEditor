<template>
    <label
        :for="id"
        class="card-label fs-14 fw-400 lh-120"
        :class="{ 'text-nowrap': !wrap }"
    >
        <slot />

        <span
            v-if="required"
            class="danger fw-600 fs-16"
        >
            *
        </span>
    </label>
</template>

<script lang="ts" setup>
interface Props {
    id?: string
    required?: boolean
    wrap?: boolean
}

withDefaults(defineProps<Props>(), {
    id: '',
    required: false,
    wrap: false
})
</script>

<style lang="scss" scoped>
@include media('<tablet') {
    .card-label {
        font-size: 12px;
        line-height: 1.6;
    }
}
</style>
