import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { TokenService } from '../token';

export interface HandleStatusCode {
  [key: number]: (error: AxiosError) => void;
}

export const apiFailureErrorMessage = 'Failure in API call'

export class HttpService {
  constructor(protected tokenService: TokenService) {}

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request<T>({ method: 'GET', url, ...config });
  }

  async post<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request<T>({ method: 'POST', url, ...config });
  }

  async put<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request<T>({ method: 'PUT', url, ...config });
  }

  async patch<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request<T>({ method: 'PATCH', url, ...config });
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request<T>({ method: 'DELETE', url, ...config });
  }

  async request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    const token = this.tokenService.getToken();

    const defaultRequestInfo: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    };

    // eslint-disable-next-line @typescript-eslint/camelcase
    defaultRequestInfo.headers.auth_token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTQ4NWZjZjBkNjcyZTAwMTdiYWY5Y2QiLCJlbWFpbCI6Im1heWFua2JhamFqbnNpdEBnbWFpbC5jb20iLCJpYXQiOjE1OTUxNTYyNjV9.g_bUiXMhMw-1dADJ3aOR4Hm5DplN1bes17bpnVjZrXA';

    return axios.request<T>({
      ...defaultRequestInfo,
      ...config,
      headers: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        auth_token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTQ4NWZjZjBkNjcyZTAwMTdiYWY5Y2QiLCJlbWFpbCI6Im1heWFua2JhamFqbnNpdEBnbWFpbC5jb20iLCJpYXQiOjE1OTUxNTYyNjV9.g_bUiXMhMw-1dADJ3aOR4Hm5DplN1bes17bpnVjZrXA',
        ...defaultRequestInfo.headers,
        ...config.headers,
      },
    });
  }

  onHttpErrorStatus(error: AxiosError, handleStatusCode: HandleStatusCode): void {
    if (error.response && error.response.status) {
      const statusCode = error.response.status;
      const handleStatusCodeFn = handleStatusCode[statusCode];

      if (typeof handleStatusCodeFn === 'function') {
        handleStatusCodeFn(error);
      }
    }
  }
}
