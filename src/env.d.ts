/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
declare module "preline/plugin";

interface ImportMetaEnv {
  DEV: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}