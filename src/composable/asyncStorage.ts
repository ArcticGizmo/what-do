import { ref } from "vue";
import { Storage, type StorageConfig } from '@ionic/storage';

export const useAsyncStore = (config?: StorageConfig) => {
  const isReady = ref(false);

  const _getStore = new Storage(config).create();

  const set = async (key: string, value: any) => {
    const store = await _getStore;
    await store.set(key, value);
  };

  const get = async <T>(key: string, defValue?: T) => {
    const store = await _getStore;
    const value = await store.get(key);
    return value == null ? defValue : (value as T);
  };

  const remove = async (key: string) => {
    const store = await _getStore;
    await store.remove(key);
  };

  return { isReady, set, get, remove };
}
