/// <reference types="vite/client" />
/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// +++
// * Vite Env 返回数据类型
declare type Recordable<T = any> = Record<string, T>;

interface ViteEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_PORT: number;
  readonly VITE_OPEN: boolean;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ViteEnv;
}
// +++
