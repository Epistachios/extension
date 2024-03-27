<script lang="ts" setup>
import Title from '@/components/Title.vue'
import IntraToken from '@/components/IntraToken.vue'
import EpitestToken from '@/components/EpitestToken.vue'
</script>

<template>
  <div>
    <Title />
    <Suspense>
      <IntraToken />
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
    <Suspense>
      <EpitestToken />
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #54bc4ae0);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
