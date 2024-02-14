<template>
    <section class="page-head d-flex align-items-center">
        <div
            v-if="$slots.content"
            class="content"
        >
            <slot name="content" />
        </div>
    </section>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.page-head {
    margin: 0 0 20px;
}

.content {
    margin-left: auto;
}

@include media('<tablet') {
    .page-head {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    .content {
        flex-direction: column;
        margin-left: 0;
        width: 100%;
    }
}
</style>
