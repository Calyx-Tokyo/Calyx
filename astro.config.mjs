import { defineConfig } from 'astro/config';

export default defineConfig({
  // GitHub Pages 用 URL（プロジェクトページ）。ベースパスも設定。
  site: 'https://calyx-tokyo.github.io/Calyx/',
  base: '/Calyx/',
  output: 'static',
});

