/* Generated file with "scripts/generate-sdk.ts" */

import {
  ImageImageBackgroundRemovalInputs,
  ImageImageBackgroundReplacementInputs,
  ImageImageColorizationInputs,
  ImageImageDeblurringInputs,
  ImageImageEnhancementInputs,
  ImageImageFaceBluringInputs,
  ImageImageGuidedInpaintingInputs,
  ImageImageImageGuidedInpaintingInputs,
  ImageImageInpaintingInputs,
  ImageImageUncolorizationInputs,
} from './input-models';
import {
  ImageImageBackgroundRemovalOutputs,
  ImageImageBackgroundReplacementOutputs,
  ImageImageColorizationOutputs,
  ImageImageDeblurringOutputs,
  ImageImageEnhancementOutputs,
  ImageImageFaceBluringOutputs,
  ImageImageGuidedInpaintingOutputs,
  ImageImageImageGuidedInpaintingOutputs,
  ImageImageInpaintingOutputs,
  ImageImageUncolorizationOutputs,
} from './output-models';
import {
  IMAGE_IMAGE_BACKGROUND_REMOVAL_CONTENT_TYPE,
  IMAGE_IMAGE_BACKGROUND_REPLACEMENT_CONTENT_TYPE,
  IMAGE_IMAGE_COLORIZATION_CONTENT_TYPE,
  IMAGE_IMAGE_DEBLURRING_CONTENT_TYPE,
  IMAGE_IMAGE_ENHANCEMENT_CONTENT_TYPE,
  IMAGE_IMAGE_FACE_BLURING_CONTENT_TYPE,
  IMAGE_IMAGE_GUIDED_INPAINTING_CONTENT_TYPE,
  IMAGE_IMAGE_IMAGE_GUIDED_INPAINTING_CONTENT_TYPE,
  IMAGE_IMAGE_INPAINTING_CONTENT_TYPE,
  IMAGE_IMAGE_UNCOLORIZATION_CONTENT_TYPE,
} from '../models';
import { getHttpClient, HttpClient } from '../internal/http-client';
import { isDefined } from '../utils/fp';
import { GladiaClientParams } from './gladia-client-params';

export class FromImageToImage {
  private httpClient: HttpClient;

  constructor(private params: GladiaClientParams) {
    this.httpClient = getHttpClient(this.params);
  }

  backgroundRemoval(args: ImageImageBackgroundRemovalInputs): Promise<ImageImageBackgroundRemovalOutputs> {
    const formData = new FormData();
    if (isDefined(args.image)) {
      formData.append('image', args.image);
    }
    if (isDefined(args.image_url)) {
      formData.append('image_url', args.image_url);
    }
    return this.httpClient.post({
      url: '/image/image/background-removal/',
      headers: {
        'Content-Type': this.params.useFetch ? IMAGE_IMAGE_BACKGROUND_REMOVAL_CONTENT_TYPE : undefined,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      responseType: 'arraybuffer',
      body: formData,
    });
  }

  backgroundReplacement(args: ImageImageBackgroundReplacementInputs): Promise<ImageImageBackgroundReplacementOutputs> {
    const formData = new FormData();
    if (isDefined(args.original_image)) {
      formData.append('original_image', args.original_image);
    }
    if (isDefined(args.original_image_url)) {
      formData.append('original_image_url', args.original_image_url);
    }
    if (isDefined(args.background_image)) {
      formData.append('background_image', args.background_image);
    }
    if (isDefined(args.background_image_url)) {
      formData.append('background_image_url', args.background_image_url);
    }
    formData.append('alignment', args.alignment);
    return this.httpClient.post({
      url: '/image/image/background-replacement/',
      headers: {
        'Content-Type': this.params.useFetch ? IMAGE_IMAGE_BACKGROUND_REPLACEMENT_CONTENT_TYPE : undefined,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      responseType: 'arraybuffer',
      body: formData,
    });
  }

  colorization(args: ImageImageColorizationInputs): Promise<ImageImageColorizationOutputs> {
    const formData = new FormData();
    if (isDefined(args.image)) {
      formData.append('image', args.image);
    }
    if (isDefined(args.image_url)) {
      formData.append('image_url', args.image_url);
    }
    return this.httpClient.post({
      url: '/image/image/colorization/',
      headers: {
        'Content-Type': this.params.useFetch ? IMAGE_IMAGE_COLORIZATION_CONTENT_TYPE : undefined,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      responseType: 'arraybuffer',
      body: formData,
    });
  }

  deblurring(args: ImageImageDeblurringInputs): Promise<ImageImageDeblurringOutputs> {
    const formData = new FormData();
    if (isDefined(args.image)) {
      formData.append('image', args.image);
    }
    if (isDefined(args.image_url)) {
      formData.append('image_url', args.image_url);
    }
    return this.httpClient.post({
      url: '/image/image/deblurring/',
      headers: {
        'Content-Type': this.params.useFetch ? IMAGE_IMAGE_DEBLURRING_CONTENT_TYPE : undefined,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      responseType: 'arraybuffer',
      body: formData,
    });
  }

  enhancement(args: ImageImageEnhancementInputs): Promise<ImageImageEnhancementOutputs> {
    const formData = new FormData();
    if (isDefined(args.image)) {
      formData.append('image', args.image);
    }
    if (isDefined(args.image_url)) {
      formData.append('image_url', args.image_url);
    }
    return this.httpClient.post({
      url: '/image/image/enhancement/',
      headers: {
        'Content-Type': this.params.useFetch ? IMAGE_IMAGE_ENHANCEMENT_CONTENT_TYPE : undefined,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      responseType: 'arraybuffer',
      body: formData,
    });
  }

  faceBluring(args: ImageImageFaceBluringInputs): Promise<ImageImageFaceBluringOutputs> {
    const formData = new FormData();
    if (isDefined(args.image)) {
      formData.append('image', args.image);
    }
    if (isDefined(args.image_url)) {
      formData.append('image_url', args.image_url);
    }
    return this.httpClient.post({
      url: '/image/image/face-bluring/',
      headers: {
        'Content-Type': this.params.useFetch ? IMAGE_IMAGE_FACE_BLURING_CONTENT_TYPE : undefined,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      responseType: 'arraybuffer',
      body: formData,
    });
  }

  guidedInpainting(args: ImageImageGuidedInpaintingInputs): Promise<ImageImageGuidedInpaintingOutputs> {
    const formData = new FormData();
    if (isDefined(args.original_image)) {
      formData.append('original_image', args.original_image);
    }
    if (isDefined(args.original_image_url)) {
      formData.append('original_image_url', args.original_image_url);
    }
    if (isDefined(args.mask_image)) {
      formData.append('mask_image', args.mask_image);
    }
    if (isDefined(args.mask_image_url)) {
      formData.append('mask_image_url', args.mask_image_url);
    }
    formData.append('prompt', args.prompt);
    return this.httpClient.post({
      url: '/image/image/guided-inpainting/',
      headers: {
        'Content-Type': this.params.useFetch ? IMAGE_IMAGE_GUIDED_INPAINTING_CONTENT_TYPE : undefined,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      responseType: 'arraybuffer',
      body: formData,
    });
  }

  imageGuidedInpainting(args: ImageImageImageGuidedInpaintingInputs): Promise<ImageImageImageGuidedInpaintingOutputs> {
    const formData = new FormData();
    if (isDefined(args.original_image)) {
      formData.append('original_image', args.original_image);
    }
    if (isDefined(args.original_image_url)) {
      formData.append('original_image_url', args.original_image_url);
    }
    if (isDefined(args.example_image)) {
      formData.append('example_image', args.example_image);
    }
    if (isDefined(args.example_image_url)) {
      formData.append('example_image_url', args.example_image_url);
    }
    if (isDefined(args.mask_image)) {
      formData.append('mask_image', args.mask_image);
    }
    if (isDefined(args.mask_image_url)) {
      formData.append('mask_image_url', args.mask_image_url);
    }
    formData.append('seed', String(args.seed));
    formData.append('steps', String(args.steps));
    formData.append('guidance_scale', String(args.guidance_scale));
    return this.httpClient.post({
      url: '/image/image/image-guided-inpainting/',
      headers: {
        'Content-Type': this.params.useFetch ? IMAGE_IMAGE_IMAGE_GUIDED_INPAINTING_CONTENT_TYPE : undefined,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      responseType: 'arraybuffer',
      body: formData,
    });
  }

  inpainting(args: ImageImageInpaintingInputs): Promise<ImageImageInpaintingOutputs> {
    const formData = new FormData();
    if (isDefined(args.original_image)) {
      formData.append('original_image', args.original_image);
    }
    if (isDefined(args.original_image_url)) {
      formData.append('original_image_url', args.original_image_url);
    }
    if (isDefined(args.mask_image)) {
      formData.append('mask_image', args.mask_image);
    }
    if (isDefined(args.mask_image_url)) {
      formData.append('mask_image_url', args.mask_image_url);
    }
    return this.httpClient.post({
      url: '/image/image/inpainting/',
      headers: {
        'Content-Type': this.params.useFetch ? IMAGE_IMAGE_INPAINTING_CONTENT_TYPE : undefined,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      responseType: 'arraybuffer',
      body: formData,
    });
  }

  uncolorization(args: ImageImageUncolorizationInputs): Promise<ImageImageUncolorizationOutputs> {
    const formData = new FormData();
    if (isDefined(args.image)) {
      formData.append('image', args.image);
    }
    if (isDefined(args.image_url)) {
      formData.append('image_url', args.image_url);
    }
    return this.httpClient.post({
      url: '/image/image/uncolorization/',
      headers: {
        'Content-Type': this.params.useFetch ? IMAGE_IMAGE_UNCOLORIZATION_CONTENT_TYPE : undefined,
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      responseType: 'arraybuffer',
      body: formData,
    });
  }

}
