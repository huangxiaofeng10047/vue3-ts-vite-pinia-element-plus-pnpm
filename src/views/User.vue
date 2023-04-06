<script setup lang="ts">
import useStore from "@/store";

import { ServeLogin } from "@/api/auth/login";

const { user } = useStore();

const login = async () => {
  const res = await ServeLogin({
    username: "Jenny",
    password: "******",
  });
  console.log(res);
};

login();
</script>

<template>
  <div>count: {{ user.count }}</div>
  <div>double: {{ user.double }}</div>
  <el-button @click="user.increment">add+</el-button>
</template>

<style scoped></style>
