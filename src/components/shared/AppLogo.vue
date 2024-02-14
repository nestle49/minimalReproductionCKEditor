<template>
    <RouterLink
        to="/"
        class="d-flex cursor-pointer"
    >
        <img
            :src="type === 'short' ? FsLogoShort : FsLogo"
            :width="type === 'short' ? 48 : ''"
            :height="height"
            alt="FoodSoul logo"
        />
    </RouterLink>
</template>

<script lang="ts" setup>
import FsLogo from '@/assets/logo.svg'
import FsLogoShort from '@/assets/logo-short.svg'

interface Props {
    height?: number
    type?: 'default' | 'short'
}

withDefaults(defineProps<Props>(), {
    height: 33,
    type: 'default'
})
</script>
