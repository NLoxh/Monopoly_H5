<template>
  <div>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="标题1" name="1">
        代码是写出来给人看的，附带能在机器上运行。
      </van-collapse-item>
      <van-collapse-item title="标题2" name="2">
        技术无非就是那些开发它的人的共同灵魂。
      </van-collapse-item>
      <van-collapse-item title="标题3" name="3">
        在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script setup>
const activeNames = ref(['1'])
</script>

<style lang="scss" scoped></style>
