<script lang="ts" setup>
const { t } = useI18n()

definePageMeta({
  layout: 'centercard',
})

useHead({
  title: `${t('global.about')} • Nightrunner`,
})
</script>

<template>
  <div class="text-center mb-5">
    <h1 class="title">
      {{ t('About us') }}
    </h1>
  </div>

  <div>
    <p>
      {{ t('main.whoweare') }}
    </p>

    <p class="mt-5">
      {{ t('main.advantages') }}
      <ul list>
        <li>We will help you to shoot a video about your bike.</li>
        <li>Also we can mount this video for you.</li>
        <li>More over we can take beautiful photos, so you can put it on the Internet and show your bike to other people.</li>
        <li>Our servises cost a little bit, it is necessary so that we havr the material recources to shoot subsequent videos.</li>
      </ul>
    </p>

    <p class="mt-5">
      {{ t('about.config') }}
    </p>
  </div>
</template>
