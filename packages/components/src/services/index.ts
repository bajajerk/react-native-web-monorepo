import { makeServices, HttpService, TokenService } from '../utils';
import { UserService } from './UserService';
import { ForumService } from './ForumService';

const tokenService = new TokenService('token');
const httpService = new HttpService(tokenService);
const userService = new UserService(httpService);
const forumService = new ForumService(httpService);

export interface Services {
  tokenService: TokenService;
  httpService: HttpService;
  userService: UserService;
  forumService: ForumService;
}

export const { ServicesProvider, useServices } = makeServices<Services>({
  tokenService,
  httpService,
  userService,
  forumService,
});
