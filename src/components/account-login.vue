<template>
  <el-form
    ref="ruleFormRef"
    status-icon
    :model="ruleForms"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
  >
    <el-form-item label="用户名：" prop="username">
      <el-input v-model="ruleForms.username" autocomplete="off">
        <template #prefix>
          <el-icon class="el-input__icon">
            <user />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item label="密码：" prop="password">
      <el-input
        type="password"
        v-model="ruleForms.password"
        placeholder="Type something"
      >
        <template #prefix>
          <el-icon class="el-input__icon">
            <search />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleLogin">Submit</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { User, Search } from "@element-plus/icons-vue";
import { defineProps, reactive, ref, defineEmits, onMounted, watch } from "vue";

let ruleForms = reactive({ username: "", password: "" });
const ruleFormRef = ref(null);
const emits = defineEmits(["onSubmit", "onError"]);

const props = defineProps({
  ruleForm: {
    type: Object,
    required: true,
  },
  rules: {
    type: Object,
    required: true,
  },
});

onMounted(() => {
  ruleForms = props.ruleForm;
});

watch(
  () => props.ruleForm,
  (val) => {
    ruleForms = val;
  },
  { immediate: true }
);

// 登录功能
const handleLogin = () => {
  ruleFormRef.value.validate((valid) => {
    if (valid) {
      emits("onSubmit");
    } else {
      emits("onError");
    }
  });
};
</script>

<style scoped></style>
