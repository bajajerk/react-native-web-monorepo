import { makeServices, HttpService, TokenService } from '../utils';
import { UserService } from './UserService';
import { ForumService } from './ForumService';
import { HomePageService } from './HomePageService';

const tokenService = new TokenService('token');
const httpService = new HttpService(tokenService);
const userService = new UserService(httpService);
const forumService = new ForumService(httpService);
const homePageService = new HomePageService(httpService);

export interface Services {
  tokenService: TokenService;
  httpService: HttpService;
  userService: UserService;
  forumService: ForumService;
  homePageService: HomePageService;
}

export const { ServicesProvider, useServices } = makeServices<Services>({
  tokenService,
  httpService,
  userService,
  forumService,
  homePageService,
});
