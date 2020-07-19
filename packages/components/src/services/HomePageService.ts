import { HttpService } from '../utils/httpService';
import { HomePageInitSchema } from '../schemas';

const apiUrl = 'https://breakup-app-api.herokuapp.com/api';

export const errorMessages = {
  initCallFailure: 'Failure in init call for fetching data',
} as const;

export class HomePageService {
  constructor(private httpService: HttpService) {}

  async getData() {
    const url = `${apiUrl}/home/init`;

    try {
      const { data } = await this.httpService.get<HomePageInitSchema>(url);
      return data;
    } catch (error) {
      throw new Error(errorMessages.initCallFailure);
    }
  }
}
