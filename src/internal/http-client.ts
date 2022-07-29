import axios from 'axios';
import { SDK_VERSION } from '../meta/sdk-version';
import { GladiaClientParams } from '../client/gladia-client-params';

interface PostParams {
  url: string;
  query?: Record<string, string | number | boolean>;
  body?: unknown;
  headers?: Record<string, string | number | boolean>;
  responseType?: 'json' | 'arraybuffer';
}

export interface HttpClient {
  post<T = string>(params: PostParams): Promise<T>;
}

export interface HttpClientFactoryParams {
  baseHeaders: Record<string, string | number | boolean>;
  baseUrl: string;
}

export type HttpClientFactory = (params: HttpClientFactoryParams) => HttpClient;

export function getHttpClient(params: GladiaClientParams) {
  const factory = params.customHttpClient ?? AxiosHttpClient;
  const baseHeaders = {
    'x-gladia-key': params.apiKey,
    'x-gladia-sdk': SDK_VERSION,
    'Content-Type': 'application/json',
  };
  return factory({ baseHeaders, baseUrl: params.baseUrl ?? 'https://v2-api.gladia.io' });
}

const AxiosHttpClient: HttpClientFactory = ({ baseHeaders, baseUrl }) => {
  return {
    post(params) {
      const headers = { ...baseHeaders, ...params.headers };
      const url = new URL(params.url, baseUrl);
      for (const [key, value] of Object.entries(params.query ?? {})) {
        url.searchParams.set(key, String(value));
      }
      const responseType = params.responseType ?? 'json';
      return axios
        .post(url.toString(), params.body, { headers, responseType })
        .then((response) => response.data);
    },
  };
};