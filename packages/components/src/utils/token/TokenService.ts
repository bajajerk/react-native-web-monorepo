import { LocalStorage } from '../../localStorage';

export class TokenService {
  static TOKEN_PARAM = 'token';

  constructor(private tokenKey: string) {}

  async getToken(): Promise<string> {
    try {
      const jwt = (await LocalStorage.getItem(this.tokenKey)) || '';
      return jwt;
    } catch (error) {
      return '';
    }
  }

  async setToken(token: string): Promise<void> {
    await LocalStorage.setItem(this.tokenKey, token);
  }

  async clearToken(): Promise<void> {
    await LocalStorage.removeItem(this.tokenKey);
  }
}
