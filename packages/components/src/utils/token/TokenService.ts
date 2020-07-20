import { LocalStorageHelper} from '../../helper/LocalStorage';

export class TokenService {
  static TOKEN_PARAM = 'token';

  constructor(private tokenKey: string) {}

  async getToken(): Promise<string> {
    try {
      const jwt = (await LocalStorageHelper.getItem(this.tokenKey)) || '';
      return jwt;
    } catch (error) {
      return '';
    }
  }

  async setToken(token: string) {
    await LocalStorageHelper.setItem(this.tokenKey, token);
  }

  async clearToken(){
    await LocalStorageHelper.removeItem(this.tokenKey);
  }
}
