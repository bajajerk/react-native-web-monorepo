import { HttpService } from '../utils/httpService';
import { CreateQuestion, ForumPosts } from '../schemas/Forum.schema';

const apiUrl = 'https://breakup-app-api.herokuapp.com/api';

export const errorMessages = {
  failedToLogin: 'Failed to login',
} as const;

export class UserService {
  constructor(private httpService: HttpService) {}

  async fetchPosts(currentPage: number): Promise<ForumPosts[]> {
    const url = `${apiUrl}/home/forum/${currentPage}`;
    try {
      const { data } = await this.httpService.post<ForumPosts[]>(url);
      return data;
    } catch (error) {
      throw new Error(errorMessages.failedToLogin);
    }
  }

  async postQuestion(question: CreateQuestion) {
    const url = `${apiUrl}/questions`;
    try {
      const { data } = await this.httpService.post<any>(url, { data: question });
      return data;
    } catch (error) {
      throw new Error(errorMessages.failedToLogin);
    }
  }
}
