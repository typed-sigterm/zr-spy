import type { StorageItemKey, WxtStorageItemOptions } from 'wxt/storage';
import { ref, watch } from 'vue';
import { storage } from 'wxt/storage';

export { version } from '~/package.json' with { type: 'json' };

/**
 * 响应式获取 storage item。
 * @see {@link storage.defineItem}
 */
export async function useStorageItem<T, D extends Record<string, unknown> = Record<string, unknown>>(key: StorageItemKey, options: WxtStorageItemOptions<T>) {
  const item = storage.defineItem<T, D>(key, options);
  const result = ref(await item.getValue());
  watch(result, (value) => {
    item.setValue(value);
  });
  return result;
}

/**
 * 启用/禁用请求规则集。
 * @param id 规则集 ID
 * @param enabled 是否启用
 */
export function setRulesetStatus(id: string, enabled: boolean) {
  if (enabled) {
    return chrome.declarativeNetRequest.updateEnabledRulesets({
      enableRulesetIds: [id],
    });
  } else {
    return chrome.declarativeNetRequest.updateEnabledRulesets({
      disableRulesetIds: [id],
    });
  }
}
