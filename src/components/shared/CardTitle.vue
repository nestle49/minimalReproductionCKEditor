<template>
    <h4 class="card-title secondary fs-16 fw-600 lh-160 ls-05 position-relative">
        <slot />
    </h4>
</template>

<style lang="scss" scoped>
.card-title {
    @include media('<tablet') {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.3;
    }
}
</style>
