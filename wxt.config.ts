import { defineConfig } from 'wxt';
import Vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import { version } from './package.json';

export default defineConfig({
  manifestVersion: 3,
  manifest: {
    name: 'ZR spy',
    version,
    description: 'ZR Tracker 辅助工具',
    icons: {
      16: 'icons/16x16.png',
      48: 'icons/48x48.png',
      128: 'icons/128x128.png',
      256: 'icons/256x256.png',
    },
    default_locale: 'zh_CN',
    permissions: [
      'declarativeNetRequestWithHostAccess',
      'storage',
    ],
    host_permissions: [
      '*://sshwy.cn/zr-api/*',
    ],
    declarative_net_request: {
      rule_resources: [{
        id: 'bypass-password',
        enabled: false,
        path: 'rulesets/bypass-password.json',
      }],
    },
    action: {
      default_icon: {
        16: 'icons/16x16.png',
        32: 'icons/32x32.png',
        48: 'icons/48x48.png',
        128: 'icons/128x128.png',
      },
    },
  },

  imports: false,
  vite: () => ({
    plugins: [
      Vue(),
      Components({
        resolvers: [NaiveUiResolver()],
      }),
    ],
  }),
});
