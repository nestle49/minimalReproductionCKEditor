<template>
    <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        class="icon"
        :style="{ '--icon-size': computedSize }"
        stroke-linejoin="round"
    >
        <use :href="symbolId" />
    </svg>
</template>

<script lang="ts" setup>
import pathToSprite from '@/assets/sprite/generated-sprite.svg'

interface Props {
    name: string
    size?: number
}

const props = defineProps<Props>()

const computedSize = computed(() => {
    if (props.size) {
        return `${props.size}px`
    }

    return '17px'
})

const symbolId = computed(() => `${pathToSprite}#${props.name}`)
</script>

<style lang="css">
.icon {
    width: var(--icon-size);
    height: var(--icon-size);
}
</style>
