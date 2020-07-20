import {apiFailureErrorMessage, HttpService} from '../utils/httpService';

const apiUrl = 'https://breakup-app-api.herokuapp.com/api';

export class UserService {
  constructor(private httpService: HttpService) {}

  async login(firebaseGeneratedToken: string) {
    const url = `${apiUrl}/users/login`;

    const config = {
      headers: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        user_token: firebaseGeneratedToken.toString(),
      },
    };
    try {
      // TODO think for schema when consuming
      const { data } = await this.httpService.post<any>(url, config);
      return data;
    } catch (error) {
      throw new Error(apiFailureErrorMessage);
    }
  }
}
