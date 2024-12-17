<template>
  <h1 class="title">
    {{ content.header }}
  </h1>
  <span class="flex-center flex-row gap-5">
    <NuxtLinkLocale to="/about" class="btn">
      {{ t('global.about') }}
    </NuxtLinkLocale>
    <NuxtLinkLocale to="/sample" class="btn">
      {{ t('global.sample') }}
    </NuxtLinkLocale>
  </span>
</template>


<script lang="ts" setup>
    const { t } = useCustomI18n()
    const content = useContentRuStore()
</script>
