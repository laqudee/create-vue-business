<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <RouterView />
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">标签A</van-tabbar-item>
    <van-tabbar-item icon="search">标签B</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签C</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签D</van-tabbar-item>
  </van-tabbar>
</template>

<style></style>

