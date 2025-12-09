import { defineConfig } from 'astro/config';

// 環境変数でデプロイ先を切り替え可能。
// デフォルトはカスタムドメイン https://calyx.tokyo/ を指す。
const site = process.env.SITE_URL || 'https://calyx.tokyo/';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  output: 'static',
});

