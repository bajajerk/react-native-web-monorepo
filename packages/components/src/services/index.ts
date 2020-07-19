import { makeServices, HttpService, TokenService } from '../utils';
import { UserService } from './UserService';

const tokenService = new TokenService('token');
const httpService = new HttpService(tokenService);
const userService = new UserService(httpService);

export interface Services {
  tokenService: TokenService;
  httpService: HttpService;
  userService: UserService;
}

export const { ServicesProvider, useServices } = makeServices<Services>({
  tokenService,
  httpService,
  userService,
});
