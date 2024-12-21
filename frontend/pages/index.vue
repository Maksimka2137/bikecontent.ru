<template>
  <h1 class="title">
    {{ t('main.title') }}
  </h1>
  <span class="flex-center flex-row gap-5">
    <NuxtLinkLocale to="/about" class="btn">
      {{ t('global.heading') }}
    </NuxtLinkLocale>
    <NuxtLinkLocale to="/sample" class="btn">
      {{ t('global.sample') }}
    </NuxtLinkLocale>
  </span>
</template>


<script lang="ts" setup>
    const { t } = useCustomI18n()
</script>
