<script lang="ts" setup>
import { ref } from 'vue'
import { IconCopy, IconCopyCheck } from '@tabler/icons-vue'

const copied = ref(false)

const getEpitestToken = async () => {
  const tabs = await browser.tabs.query({ url: 'https://my.epitech.eu/*' })

  if (tabs.length > 0 && tabs[0].id) {
    const response = await browser.tabs.sendMessage(tabs[0].id, {
      action: 'getLocalStorage',
      key: 'argos-api.oidc-token'
    })

    return response?.data.replace(/"/g, '') || null
  }

  return null
}

const copy = async (token: string | null) => {
  if (token) {
    try {
      await navigator.clipboard.writeText(token)
      copied.value = true

      setTimeout(() => {
        copied.value = false
      }, 4000)
    } catch {
      copied.value = false
    }
  }
}

const token = await getEpitestToken()
</script>

<template>
  <div>
    <label for="epitest-token">Epitest Token</label>
    <div class="input-wrapper">
      <input id="epitest-token" v-model="token" readonly />
      <button @click="copy(token)" class="copy-btn">
        <IconCopyCheck v-if="copied" :size="16" stroke-width="2" />
        <IconCopy v-else :size="16" stroke-width="2" />
      </button>
    </div>
  </div>
</template>

<style scoped>
div:not(.input-wrapper) {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
}

label[for='epitest-token'] {
  font-size: 0.875rem;
}

.input-wrapper {
  position: relative;
  display: flex;
  width: 100%;
}

.input-wrapper {
  position: relative;
  display: flex;
}

.input-wrapper input {
  width: 100%;
  padding: 0.5rem;
  padding-right: 2.5rem;
  line-height: 0;
  border: 1px solid #ccc;
  border-radius: 0.5em;
  outline: none;
}

.input-wrapper input:focus {
  border-color: #6562f8;
}

.input-wrapper .copy-btn {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  height: 100%;
  background-color: #f8f9fa;
  cursor: pointer;
}

.input-wrapper .copy-btn:hover {
  background-color: #e9ecef;
}
</style>
