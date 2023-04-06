import fs from "fs";
import path from "path";

// 在 .env 文件中读取配置信息，并转换为 vite-env.d.ts 文件中声明类型的值
export function wrapperEnv(env: Recordable): ViteEnv {
  const ret: any = {};
  for (const envName of Object.keys(env)) {
    let envValue = env[envName].replace(/\\n/g, "\n");
    envValue =
      envValue === "true" ? true : envValue === "false" ? false : envValue;

    if (envName === "VITE_PORT") {
      envValue = Number(envValue);
    }

    ret[envName] = envValue;
    process.env[envName] = envValue;
  }
  return ret;
}
