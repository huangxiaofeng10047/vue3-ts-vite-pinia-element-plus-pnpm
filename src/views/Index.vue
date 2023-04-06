<template>
  <div>
    <h1 class="title">首页</h1>
    <SvgIcon icon-class="vue"></SvgIcon>
    <SvgIcon icon-class="crown"></SvgIcon>
  </div>
  <div class="login">
    <div class="account-panel">
      <account-login
        :ruleForm="ruleForm"
        :rules="rules"
        @onSubmit="onSubmit"
        @onError="onError"
      />
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { ElMessage } from "element-plus";

const ruleForm = reactive({
  username: "",
  password: "",
});
const rules = reactive({
  username: [
    {
      required: true,
      trigger: "blur",
      message: "用户名长度在2-6之间",
    },
  ],
  password: [
    {
      required: true,
      trigger: "blur",
      validator: "密码不能为空",
    },
  ],
});
const onSubmit = () => {
  alert("发送 http请求：");
  ElMessage({
    type: "success",
    message: "保存成功",
  });
};
const onError = () => {
  ElMessage({
    type: "warning",
    message: "校验失败",
  });
};
</script>

<style scoped lang="scss">
.login {
  margin-top: 50px;
  margin-left: 20px;
}

.account-panel {
  width: 350px;
  height: 350px;
}
</style>
