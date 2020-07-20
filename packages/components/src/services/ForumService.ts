import { HttpService, apiFailureErrorMessage } from '../utils/httpService';
import { CreateQuestion, ForumPosts } from '../schemas/Forum.schema';

const apiUrl = 'https://breakup-app-api.herokuapp.com/api';

export class ForumService {
  constructor(private httpService: HttpService) {}

  async fetchPosts(currentPage: number) {
    const url = `${apiUrl}/home/forum/${currentPage}`;
    try {
      const {
        data: { questions },
      } = await this.httpService.get<any>(url);
      return questions;
    } catch (error) {
      throw new Error(apiFailureErrorMessage);
    }
  }
  async fetchAnswers(questionId: string) {
    const url = `${apiUrl}/home/answers/${questionId}`;
    try {
      // TODO think for schema when consuming
      const {
        data: { answers },
      } = await this.httpService.get<any>(url);
      return answers;
    } catch (error) {
      throw new Error(apiFailureErrorMessage);
    }
  }
  async postQuestion(question: CreateQuestion) {
    const url = `${apiUrl}/questions`;
    try {
      // TODO think for schema when consuming
      const { data } = await this.httpService.post<any>(url, { data: question });
      return data;
    } catch (error) {
      throw new Error(apiFailureErrorMessage);
    }
  }
  // async postLike(questionId: string) {
  //   const url = `${apiUrl}/questions`;
  //   try {
  //     const { data } = await this.httpService.post<any>(url, { data: question });
  //     return data;
  //   } catch (error) {
  //     throw new Error(errorMessages.failedToLogin);
  //   }
  // }
}
