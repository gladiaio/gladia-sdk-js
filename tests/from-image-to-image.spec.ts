/* Generated file with "scripts/generate-sdk.ts" */

import { GladiaClient } from '../src/gladia-client';
import gladia from '../src/index';
import { HttpClient } from '../src/internal/http-client';
import { getRandomText, getPostMock, mockHttpClient } from './helpers/mocks';

describe('FromImageToImage', () => {
  describe('backgroundRemoval', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromImage().toImage()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const result = await gladiaClient.fromImage().toImage().backgroundRemoval({
          image: image_data,
          image_url: image_url_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/background-removal/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const result = await gladiaClient.fromImage().toImage().backgroundRemoval({
          image: image_data,
          image_url: image_url_data,
          model: 'xception' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/background-removal/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
          model: 'xception',
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const result = await gladiaClient.backgroundRemoval({
          image: image_data,
          image_url: image_url_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/background-removal/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const result = await gladiaClient.backgroundRemoval({
          image: image_data,
          image_url: image_url_data,
          model: 'xception' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/background-removal/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
          model: 'xception',
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
    });
  });

  describe('colorization', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromImage().toImage()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const result = await gladiaClient.fromImage().toImage().colorization({
          image: image_data,
          image_url: image_url_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/colorization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const result = await gladiaClient.fromImage().toImage().colorization({
          image: image_data,
          image_url: image_url_data,
          model: 'deoldify-artistic' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/colorization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
          model: 'deoldify-artistic',
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const result = await gladiaClient.colorization({
          image: image_data,
          image_url: image_url_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/colorization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const result = await gladiaClient.colorization({
          image: image_data,
          image_url: image_url_data,
          model: 'deoldify-artistic' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/colorization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
          model: 'deoldify-artistic',
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
    });
  });

  describe('faceBluring', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromImage().toImage()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const result = await gladiaClient.fromImage().toImage().faceBluring({
          image: image_data,
          image_url: image_url_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/face-bluring/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const result = await gladiaClient.fromImage().toImage().faceBluring({
          image: image_data,
          image_url: image_url_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/face-bluring/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const result = await gladiaClient.faceBluring({
          image: image_data,
          image_url: image_url_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/face-bluring/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const result = await gladiaClient.faceBluring({
          image: image_data,
          image_url: image_url_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/face-bluring/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
    });
  });

  describe('uncolorization', () => {
    let gladiaClient: GladiaClient;
    let httpClientMock: HttpClient;

    beforeEach(() => {
      gladiaClient = gladia({ apiKey: 'API-KEY', customHttpClient: mockHttpClient() });
      httpClientMock = gladiaClient.fromImage().toImage()['httpClient'];
    });

    describe('full path', () => {
      it('should call the api with the text and the default model by default', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const result = await gladiaClient.fromImage().toImage().uncolorization({
          image: image_data,
          image_url: image_url_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/uncolorization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const result = await gladiaClient.fromImage().toImage().uncolorization({
          image: image_data,
          image_url: image_url_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/uncolorization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
    });
    describe('shortcuts', () => {
      it('should call the api with the text and the default model by default', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const result = await gladiaClient.uncolorization({
          image: image_data,
          image_url: image_url_data,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/uncolorization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
      it('should call the api with the text and the specified model', async () => {
        const image_data = new Blob([getRandomText()]);
        const image_url_data = getRandomText();
        const result = await gladiaClient.uncolorization({
          image: image_data,
          image_url: image_url_data,
          model: 'fake-model-name' as any,
        });
        const { postMock, firstCallArgs, firstCallBody } = getPostMock(httpClientMock);
        expect(postMock).toHaveBeenCalledTimes(1);
        expect(firstCallArgs.url).toEqual('/image/image/uncolorization/');
        expect(firstCallArgs.headers).toEqual({
          'Content-Type': undefined,
        });
        expect(firstCallArgs.responseType).toEqual('arraybuffer');
        expect(firstCallArgs.query).toEqual({
          model: 'fake-model-name',
        });
        expect(firstCallBody.get('image')).toBeDefined();
        expect(firstCallBody.get('image_url')).toEqual(image_url_data);
      });
    });
  });

});