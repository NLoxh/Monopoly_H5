<template>
  <RouterView />
</template>

<script setup>
import { load } from '@fingerprintjs/fingerprintjs'

async function initFingerprint() {
  try {
    const fp = await load({ monitoring: false })
    const result = await fp.get()
    console.log('visitorId:', result.visitorId)
  } catch (e) {
    console.error('Fingerprint init failed:', e)
  }
}

initFingerprint()
</script>

<style scoped></style>
