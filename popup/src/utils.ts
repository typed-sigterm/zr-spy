import type { UnwrapRef } from 'vue'
import { computed, onUnmounted, ref } from 'vue'

/**
 * 获取 `chrome.storage.local` 中的值。
 * @param key 键
 * @returns 值
 */
function getStorageValue<T>(key: string) {
  return new Promise<T>((resolve, reject) => {
    chrome.storage.local.get(key, (result) => {
      if (chrome.runtime.lastError)
        reject(chrome.runtime.lastError)
      resolve(result[key])
    })
  })
}

/**
 * 响应式获取 `chrome.storage.local` 中的值。
 * @param key 键
 * @returns 响应式的值
 */
export async function useStorageValue<T>(key: string, defaultValue: UnwrapRef<Awaited<T>>) {
  const value = ref(await getStorageValue<T>(key))
  if (typeof value.value === 'undefined') {
    value.value = defaultValue
    await chrome.storage.local.set({ [key]: defaultValue })
  }

  const listener = (changes: { [key: string]: chrome.storage.StorageChange }) => {
    if (key in changes)
      value.value = changes[key].newValue
  }
  chrome.storage.local.onChanged.addListener(listener)
  onUnmounted(() => {
    chrome.storage.local.onChanged.removeListener(listener)
  })

  return computed({
    get: () => value.value,
    set: v => chrome.storage.local.set({ [key]: v }),
  })
}

/**
 * 启用/禁用请求规则。
 * @param id 规则 ID
 * @param enabled 是否启用
 */
export function setRequestRuleEnabled(id: number, enabled: boolean) {
  if (enabled) {
    return chrome.declarativeNetRequest.updateStaticRules({
      rulesetId: 'ruleset',
      enableRuleIds: [id],
    })
  }
  else {
    return chrome.declarativeNetRequest.updateStaticRules({
      rulesetId: 'ruleset',
      disableRuleIds: [id],
    })
  }
}

export { version } from '../../manifest.json'
