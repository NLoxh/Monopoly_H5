<template>
  <RouterView />
</template>

<script setup>
import { v4 as uuidv4 } from 'uuid'
const initUUID = () => {
  let uuid = window.localStorage.getItem('uuid')
  if (!uuid) {
    uuid = uuidv4()
    window.localStorage.setItem('uuid', uuid)
  }
  console.log('UUID:', uuid)
}
onMounted = () => {
  initUUID()
}
</script>

<style scoped></style>
