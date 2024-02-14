<template>
  <CardItem class="d-flex flex-column gap-20 w-100">
    <CardTitle> О компании </CardTitle>

    <Suspense>
      <RichText />
    </Suspense>
  </CardItem>
</template>

<script lang="ts" setup>
import CardItem from '@/components/shared/CardItem.vue'
import CardTitle from '@/components/shared/CardTitle.vue'
import RichText from '@/components/shared/RichText.vue'
</script>
