import { HttpService } from '../utils/httpService';
import { CreateQuestion, ForumPosts } from '../schemas/Forum.schema';

const apiUrl = 'https://breakup-app-api.herokuapp.com/api';

export const errorMessages = {
  failedToLogin: 'Failed to login',
} as const;

export class ForumService {
  constructor(private httpService: HttpService) {}

  async fetchPosts(currentPage: number): Promise<ForumPosts[]> {
    const url = `${apiUrl}/home/forum/${currentPage}`;
    try {
      const {
        data: { questions },
      } = await this.httpService.get<any>(url);
      return questions;
    } catch (error) {
      console.log(error);
      throw new Error(errorMessages.failedToLogin);
    }
  }

  testServvice(): string {
    return 'Hello';
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
