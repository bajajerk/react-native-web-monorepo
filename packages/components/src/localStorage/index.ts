import AsyncStorage from '@react-native-community/async-storage';

export class LocalStorage {
  static async setItem(key: string, value: string) {
    return AsyncStorage.setItem(key, value);
  }

  static async getItem(key: string) {
    return AsyncStorage.getItem(key);
  }

  static async removeItem(key: string) {
    return AsyncStorage.removeItem(key);
  }

  static async clear() {
    return AsyncStorage.clear();
  }
}
