<template>
    <div class="d-flex flex-1">

        <main class="main d-flex flex-column w-100">
            <div
                class="page-wrapper h-100"
            >
                <RouterView />
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

import { useLocale } from '@/composables/useLocale'

const { locale } = useI18n()
const { updateLocale } = useLocale()

onBeforeMount(async () => {
    await updateLocale(locale.value)
})
</script>

<style scoped lang="scss">
.main {
    will-change: width, padding-left;
    transition: padding-left var(--sidebar-transition-duration-timing);
    padding-left: var(--sidebar-padding);
}

.page-wrapper {
    padding: 30px 30px 0;

    @include media('<tablet') {
        padding: 15px 15px 0;
    }

    &.mt-60 {
        margin-top: 60px;
    }
}

.notification-list {
    position: fixed;
    right: 16px;
    bottom: 16px;
    z-index: 100;
}
</style>
