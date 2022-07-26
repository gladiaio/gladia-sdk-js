/* Generated file with "scripts/generate-metasdk.ts" */

import { EndpointDef } from "./endpoint-defs-type";

export const ENDPOINT_DEFS: EndpointDef[] = [
  {
    "url": "/audio/text/audio-transcription/",
    "inputType": "audio",
    "outputType": "text",
    "taskName": "audio-transcription",
    "models": [
      "coqui_english_huge_vocab",
      "openai-whisper--base",
      "openai-whisper--large",
      "openai-whisper--large-v1",
      "openai-whisper--large-v2",
      "openai-whisper--medium",
      "openai-whisper--small",
      "openai-whisper--tiny"
    ],
    "defaultModel": "openai-whisper--tiny",
    "inputBodyContentType": "multipart/form-data",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "audio",
        "name": "audio",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "audio_url",
        "required": false
      },
      {
        "in": "formData",
        "type": "string",
        "name": "language",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/audio/text/speaker-diarization/",
    "inputType": "audio",
    "outputType": "text",
    "taskName": "speaker-diarization",
    "models": [
      "pyannote-speaker_diarization"
    ],
    "defaultModel": "pyannote-speaker_diarization",
    "inputBodyContentType": "multipart/form-data",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "audio",
        "name": "audio",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "audio_url",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/audio/text/speaker-gender-classification/",
    "inputType": "audio",
    "outputType": "text",
    "taskName": "speaker-gender-classification",
    "models": [
      "inafoss-inaSpeechSegmenter"
    ],
    "defaultModel": "inafoss-inaSpeechSegmenter",
    "inputBodyContentType": "multipart/form-data",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "audio",
        "name": "audio",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "audio_url",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/image/image/background-removal/",
    "inputType": "image",
    "outputType": "image",
    "taskName": "background-removal",
    "models": [
      "mobilenet",
      "xception"
    ],
    "defaultModel": "mobilenet",
    "inputBodyContentType": "multipart/form-data",
    "outputBodyContentType": {
      "type": "binary"
    },
    "params": [
      {
        "in": "formData",
        "type": "image",
        "name": "image",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "image_url",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/image/image/background-replacement/",
    "inputType": "image",
    "outputType": "image",
    "taskName": "background-replacement",
    "models": [
      "mobilenet"
    ],
    "defaultModel": "mobilenet",
    "inputBodyContentType": "multipart/form-data",
    "outputBodyContentType": {
      "type": "binary"
    },
    "params": [
      {
        "in": "formData",
        "type": "image",
        "name": "original_image",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "original_image_url",
        "required": false
      },
      {
        "in": "formData",
        "type": "image",
        "name": "background_image",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "background_image_url",
        "required": false
      },
      {
        "in": "formData",
        "type": "enum",
        "name": "alignment",
        "required": true,
        "enumValues": [
          "center",
          "top",
          "bottom",
          "left",
          "right",
          "top-left",
          "top-center",
          "top-right",
          "bottom-left",
          "bottom-center",
          "bottom-right",
          "cropped"
        ]
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/image/image/colorization/",
    "inputType": "image",
    "outputType": "image",
    "taskName": "colorization",
    "models": [
      "deoldify-artistic",
      "deoldify-stable",
      "mlhubber_colorize"
    ],
    "defaultModel": "mlhubber_colorize",
    "inputBodyContentType": "multipart/form-data",
    "outputBodyContentType": {
      "type": "binary"
    },
    "params": [
      {
        "in": "formData",
        "type": "image",
        "name": "image",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "image_url",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/image/image/deblurring/",
    "inputType": "image",
    "outputType": "image",
    "taskName": "deblurring",
    "models": [
      "CMFNet"
    ],
    "defaultModel": "CMFNet",
    "inputBodyContentType": "multipart/form-data",
    "outputBodyContentType": {
      "type": "binary"
    },
    "params": [
      {
        "in": "formData",
        "type": "image",
        "name": "image",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "image_url",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/image/image/enhancement/",
    "inputType": "image",
    "outputType": "image",
    "taskName": "enhancement",
    "models": [
      "FiveK",
      "LOL"
    ],
    "defaultModel": "FiveK",
    "inputBodyContentType": "multipart/form-data",
    "outputBodyContentType": {
      "type": "binary"
    },
    "params": [
      {
        "in": "formData",
        "type": "image",
        "name": "image",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "image_url",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/image/image/face-bluring/",
    "inputType": "image",
    "outputType": "image",
    "taskName": "face-bluring",
    "models": [
      "ageitgey"
    ],
    "defaultModel": "ageitgey",
    "inputBodyContentType": "multipart/form-data",
    "outputBodyContentType": {
      "type": "binary"
    },
    "params": [
      {
        "in": "formData",
        "type": "image",
        "name": "image",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "image_url",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/image/image/guided-inpainting/",
    "inputType": "image",
    "outputType": "image",
    "taskName": "guided-inpainting",
    "models": [
      "compvis",
      "runwayml"
    ],
    "defaultModel": "runwayml",
    "inputBodyContentType": "multipart/form-data",
    "outputBodyContentType": {
      "type": "binary"
    },
    "params": [
      {
        "in": "formData",
        "type": "image",
        "name": "original_image",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "original_image_url",
        "required": false
      },
      {
        "in": "formData",
        "type": "image",
        "name": "mask_image",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "mask_image_url",
        "required": false
      },
      {
        "in": "formData",
        "type": "string",
        "name": "prompt",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/image/image/image-guided-inpainting/",
    "inputType": "image",
    "outputType": "image",
    "taskName": "image-guided-inpainting",
    "models": [
      "fantasy-studio"
    ],
    "defaultModel": "fantasy-studio",
    "inputBodyContentType": "multipart/form-data",
    "outputBodyContentType": {
      "type": "binary"
    },
    "params": [
      {
        "in": "formData",
        "type": "image",
        "name": "original_image",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "original_image_url",
        "required": false
      },
      {
        "in": "formData",
        "type": "image",
        "name": "example_image",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "example_image_url",
        "required": false
      },
      {
        "in": "formData",
        "type": "image",
        "name": "mask_image",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "mask_image_url",
        "required": false
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "seed",
        "required": true
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "steps",
        "required": true
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "guidance_scale",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/image/image/inpainting/",
    "inputType": "image",
    "outputType": "image",
    "taskName": "inpainting",
    "models": [
      "fcf",
      "lama",
      "latent-diffusion",
      "mat",
      "zits"
    ],
    "defaultModel": "zits",
    "inputBodyContentType": "multipart/form-data",
    "outputBodyContentType": {
      "type": "binary"
    },
    "params": [
      {
        "in": "formData",
        "type": "image",
        "name": "original_image",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "original_image_url",
        "required": false
      },
      {
        "in": "formData",
        "type": "image",
        "name": "mask_image",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "mask_image_url",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/image/image/uncolorization/",
    "inputType": "image",
    "outputType": "image",
    "taskName": "uncolorization",
    "models": [
      "v1"
    ],
    "defaultModel": "v1",
    "inputBodyContentType": "multipart/form-data",
    "outputBodyContentType": {
      "type": "binary"
    },
    "params": [
      {
        "in": "formData",
        "type": "image",
        "name": "image",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "image_url",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/image/text/classification/",
    "inputType": "image",
    "outputType": "text",
    "taskName": "classification",
    "models": [
      "alexnet",
      "convnext_base",
      "convnext_large",
      "convnext_small",
      "convnext_tiny",
      "densenet121",
      "densenet161",
      "densenet169",
      "densenet201",
      "efficientnet_b0",
      "efficientnet_b1_v1",
      "efficientnet_b1_v2",
      "efficientnet_b2",
      "efficientnet_b3",
      "efficientnet_b4",
      "efficientnet_b5",
      "efficientnet_b6",
      "efficientnet_b7",
      "efficientnet_v2_l",
      "efficientnet_v2_m",
      "efficientnet_v2_s",
      "googlenet",
      "googlenet_quantized_fbgemm_v1",
      "inception_v3",
      "inception_v3_fbgemm_v1",
      "mnasnet0_5",
      "mnasnet0_75",
      "mnasnet1_0",
      "mnasnet1_3",
      "mobilenet_v2_quantized_qnnpack_v1",
      "mobilenet_v2_v1",
      "mobilenet_v2_v2",
      "mobilenet_v3_large_quantized_qnnpack_v1",
      "mobilenet_v3_large_v1",
      "mobilenet_v3_large_v2",
      "mobilenet_v3_small",
      "regnet_x_16gf_v1",
      "regnet_x_16gf_v2",
      "regnet_x_1_6gf_v1",
      "regnet_x_1_6gf_v2",
      "regnet_x_32gf_v1",
      "regnet_x_32gf_v2",
      "regnet_x_3_2gf_v1",
      "regnet_x_3_2gf_v2",
      "regnet_x_400mf_v1",
      "regnet_x_400mf_v2",
      "regnet_x_800mf_v1",
      "regnet_x_800mf_v2",
      "regnet_x_8gf_v1",
      "regnet_x_8gf_v2",
      "regnet_y_128gf_swag_e2e_v1",
      "regnet_y_128gf_swag_linear_v1",
      "regnet_y_16gf_swag_e2e_v1",
      "regnet_y_16gf_swag_linear_v1",
      "regnet_y_16gf_v1",
      "regnet_y_16gf_v2",
      "regnet_y_1_6gf_v1",
      "regnet_y_1_6gf_v2",
      "regnet_y_32gf_swag_e2e_v1",
      "regnet_y_32gf_swag_linear_v1",
      "regnet_y_32gf_v1",
      "regnet_y_32gf_v2",
      "regnet_y_3_2gf_v1",
      "regnet_y_3_2gf_v2",
      "regnet_y_400mf_v1",
      "regnet_y_400mf_v2",
      "regnet_y_8gf_v1",
      "regnet_y_8gf_v2",
      "resnet152_v1",
      "resnet152_v2",
      "resnet18",
      "resnet18_quantized_fbgemm_v1",
      "resnet34",
      "resnet50_quantized_fbgemm_v1",
      "resnet50_quantized_fbgemm_v2",
      "resnet50_v1",
      "resnet50_v2",
      "resnext101_32x8d_quantized_fbgemm_v1",
      "resnext101_32x8d_quantized_fbgemm_v2",
      "resnext101_32x8d_v1",
      "resnext101_32x8d_v2",
      "resnext101_64x4d_quantized_fbgemm_v1",
      "resnext101_64x4d_v1",
      "resnext50_32x4d_v1",
      "resnext50_32x4d_v2",
      "shufflenet_v2_x0_5",
      "shufflenet_v2_x0_5_quantized_fbgemm_v1",
      "shufflenet_v2_x1_0",
      "shufflenet_v2_x1_0_quantized_fbgemm_v1",
      "shufflenet_v2_x1_5",
      "shufflenet_v2_x1_5_quantized_fbgemm_v1",
      "shufflenet_v2_x2_0",
      "shufflenet_v2_x2_0_quantized_fbgemm_v1",
      "squeezenet1_0",
      "squeezenet1_1",
      "swin_b",
      "swin_s",
      "swin_t",
      "vgg11",
      "vgg11_bn",
      "vgg13",
      "vgg13_bn",
      "vgg16_bn",
      "vgg16_v1",
      "vgg19",
      "vgg19_bn",
      "vit_b_16_swag_e2e_v1",
      "vit_b_16_swag_linear_v1",
      "vit_b_16_v1",
      "vit_b_32",
      "vit_h_14_swag_e2e_v1",
      "vit_h_14_swag_linear_v1",
      "vit_l_16_swag_e2e_v1",
      "vit_l_16_swag_linear_v1",
      "vit_l_16_v1",
      "vit_l_32",
      "wide_resnet101_2_v1",
      "wide_resnet101_2_v2"
    ],
    "defaultModel": "alexnet",
    "inputBodyContentType": "multipart/form-data",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "image",
        "name": "image",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "image_url",
        "required": false
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "top_k",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/image/text/ocr/",
    "inputType": "image",
    "outputType": "text",
    "taskName": "ocr",
    "models": [
      "easy-ocr",
      "tesseract-default",
      "tesseract-denoising",
      "textract-extractor"
    ],
    "defaultModel": "textract-extractor",
    "inputBodyContentType": "multipart/form-data",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "image",
        "name": "image",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "image_url",
        "required": false
      },
      {
        "in": "formData",
        "type": "string",
        "name": "source_language",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/image/image-generation/",
    "inputType": "text",
    "outputType": "image",
    "taskName": "image-generation",
    "models": [
      "dream-studio",
      "stable-diffusion--compvis-sd-14",
      "stable-diffusion--runwayml-sd-15",
      "stable-diffusion--stabilityai-sd-20",
      "stable-diffusion--stabilityai-sd-21"
    ],
    "defaultModel": "stable-diffusion--stabilityai-sd-21",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "binary"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "prompt",
        "required": true
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "samples",
        "required": false
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "steps",
        "required": false
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "seed",
        "required": false
      }
    ],
    "hasSamplesParam": true
  },
  {
    "url": "/text/text/address-formatting/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "address-formatting",
    "models": [
      "geopy-formatter"
    ],
    "defaultModel": "geopy-formatter",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "address",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/age-from-name/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "age-from-name",
    "models": [
      "jpt"
    ],
    "defaultModel": "jpt",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "unknown"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "name",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/anonymization/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "anonymization",
    "models": [
      "ms-presidio"
    ],
    "defaultModel": "ms-presidio",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "language",
        "required": true
      },
      {
        "in": "formData",
        "type": "string",
        "name": "entities",
        "required": true
      },
      {
        "in": "formData",
        "type": "string",
        "name": "text",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/autocorrect/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "autocorrect",
    "models": [
      "flexudy-t5-base-multi-sentence-doctor"
    ],
    "defaultModel": "flexudy-t5-base-multi-sentence-doctor",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "sentence",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/bullet-point-generation/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "bullet-point-generation",
    "models": [
      "jpt"
    ],
    "defaultModel": "jpt",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "unknown"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "text",
        "required": false
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "bullets",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/command-generation/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "command-generation",
    "models": [
      "jpt"
    ],
    "defaultModel": "jpt",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "unknown"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "text",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/company-categorization/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "company-categorization",
    "models": [
      "jpt"
    ],
    "defaultModel": "jpt",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "unknown"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "text",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/company-name-normalization/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "company-name-normalization",
    "models": [
      "jpt"
    ],
    "defaultModel": "jpt",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "unknown"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "text",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/company-stock-code/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "company-stock-code",
    "models": [
      "jpt"
    ],
    "defaultModel": "jpt",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "unknown"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "text",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/conversation-summarization/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "conversation-summarization",
    "models": [
      "bart-large-xsum-samsum"
    ],
    "defaultModel": "bart-large-xsum-samsum",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "text",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/country-from-name/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "country-from-name",
    "models": [
      "jpt"
    ],
    "defaultModel": "jpt",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "unknown"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "name",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/date-cleaning/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "date-cleaning",
    "models": [
      "dataprep-formatter"
    ],
    "defaultModel": "dataprep-formatter",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "date",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/emotion-recognition/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "emotion-recognition",
    "models": [
      "mrm8488-t5-base-finetuned-emotion"
    ],
    "defaultModel": "mrm8488-t5-base-finetuned-emotion",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "text",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/gender-from-name/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "gender-from-name",
    "models": [
      "jpt"
    ],
    "defaultModel": "jpt",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "unknown"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "name",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/gps-address-formatting/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "gps-address-formatting",
    "models": [
      "geopy-formatter"
    ],
    "defaultModel": "geopy-formatter",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "float",
        "name": "latitude",
        "required": true
      },
      {
        "in": "formData",
        "type": "float",
        "name": "longitude",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/gpt3/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "gpt3",
    "models": [
      "jpt"
    ],
    "defaultModel": "jpt",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "unknown"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "text",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/guess-city/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "guess-city",
    "models": [
      "jpt"
    ],
    "defaultModel": "jpt",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "unknown"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "text",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/guess-country/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "guess-country",
    "models": [
      "jpt"
    ],
    "defaultModel": "jpt",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "unknown"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "text",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/guess-intent/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "guess-intent",
    "models": [
      "jpt"
    ],
    "defaultModel": "jpt",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "unknown"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "text",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/hate-speech-detection/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "hate-speech-detection",
    "models": [
      "byt5-base-tweet-hate-detection",
      "distilbert-base-uncased-emotion",
      "dkleczek_Polish-Hate-Speech-Detection-Herbert-Large"
    ],
    "defaultModel": "distilbert-base-uncased-emotion",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "text",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/headline-generation/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "headline-generation",
    "models": [
      "jpt",
      "michau-t5-base-en-generate-headline"
    ],
    "defaultModel": "jpt",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "text",
        "required": true
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "max_length",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/keyword-extraction/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "keyword-extraction",
    "models": [
      "keybert-paraphrase-multilingual-MiniLM-L12-v2"
    ],
    "defaultModel": "keybert-paraphrase-multilingual-MiniLM-L12-v2",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "text",
        "required": true
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "top_k",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/language-codes/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "language-codes",
    "models": [
      "language-codes"
    ],
    "defaultModel": "language-codes",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "language_code",
        "required": true
      },
      {
        "in": "formData",
        "type": "string",
        "name": "display_output_language",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/language-detection/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "language-detection",
    "models": [
      "jpt",
      "papluca_xlm-roberta-base-language-detection_deepspeed",
      "toftrup-etal-2021"
    ],
    "defaultModel": "jpt",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "text",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/language-generation/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "language-generation",
    "models": [
      "EleutherAI-gpt-neo-2_7B",
      "bloom-560m",
      "gpt2_xl"
    ],
    "defaultModel": "gpt2_xl",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "text",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/named-entity-recognition/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "named-entity-recognition",
    "models": [
      "dbmdz-bert-large-cased-finetuned-conll03-english_deepspeed",
      "spacy-multilingual"
    ],
    "defaultModel": "spacy-multilingual",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "text",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/next-sentence-prediction/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "next-sentence-prediction",
    "models": [
      "bert-base-uncased"
    ],
    "defaultModel": "bert-base-uncased",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "sentence_1",
        "required": true
      },
      {
        "in": "formData",
        "type": "string",
        "name": "sentence_2",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/next-word-prediction/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "next-word-prediction",
    "models": [
      "albert-base-v2",
      "bert-base-uncased",
      "distilbert-base-uncased",
      "roberta-base"
    ],
    "defaultModel": "distilbert-base-uncased",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "sentence",
        "required": true
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "top_k",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/product-ownership/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "product-ownership",
    "models": [
      "jpt"
    ],
    "defaultModel": "jpt",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "unknown"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "text",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/product-sentiment/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "product-sentiment",
    "models": [
      "jpt"
    ],
    "defaultModel": "jpt",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "unknown"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "text",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/programming-language-generation/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "programming-language-generation",
    "models": [
      "sentdex-GPyT"
    ],
    "defaultModel": "sentdex-GPyT",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "code_snippet",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/punctuation-restoration/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "punctuation-restoration",
    "models": [
      "oguhr-multilingualpunctuation"
    ],
    "defaultModel": "oguhr-multilingualpunctuation",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "sentence",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/question-answering/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "question-answering",
    "models": [
      "deepset-roberta-base-squad2",
      "deepset_bert-base-cased-squad2",
      "deepset_roberta-large-squad2",
      "distilbert-base-cased-distilled-squad",
      "mfeb-albert-xxlarge-v2-squad2",
      "mrm8488-bert-tiny-5-finetuned-squadv2"
    ],
    "defaultModel": "deepset_roberta-large-squad2",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "context",
        "required": true
      },
      {
        "in": "formData",
        "type": "string",
        "name": "question",
        "required": true
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "top_k",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/sentence-paraphraser/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "sentence-paraphraser",
    "models": [
      "ramsrigouthamg-t5-large-paraphraser-diverse-high-quality",
      "ramsrigouthamg-t5_sentence_paraphraser"
    ],
    "defaultModel": "ramsrigouthamg-t5-large-paraphraser-diverse-high-quality",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "context",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/sentiment-analysis/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "sentiment-analysis",
    "models": [
      "distilbert-base-uncased",
      "distilbert-base-uncased-finetuned-sst-2-english",
      "zero-shot-classification-facebook-bart-large-mnli"
    ],
    "defaultModel": "distilbert-base-uncased-finetuned-sst-2-english",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "text",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/similarity/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "similarity",
    "models": [
      "all-MiniLM-L6-v2"
    ],
    "defaultModel": "all-MiniLM-L6-v2",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "sentence_1",
        "required": true
      },
      {
        "in": "formData",
        "type": "string",
        "name": "sentence_2",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/speaker-recognition/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "speaker-recognition",
    "models": [
      "jpt"
    ],
    "defaultModel": "jpt",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "unknown"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "text",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/summarization/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "summarization",
    "models": [
      "all-MiniLM-L6-v2"
    ],
    "defaultModel": "all-MiniLM-L6-v2",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "text",
        "required": true
      },
      {
        "in": "formData",
        "type": "string",
        "name": "source_language",
        "required": true
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "min_length",
        "required": false
      },
      {
        "in": "formData",
        "type": "integer",
        "name": "max_length",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/translation/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "translation",
    "models": [
      "facebook-nllb-200-distilled-600M",
      "jpt"
    ],
    "defaultModel": "jpt",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "input_string",
        "required": true
      },
      {
        "in": "formData",
        "type": "string",
        "name": "source_language",
        "required": true
      },
      {
        "in": "formData",
        "type": "string",
        "name": "target_language",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/vat-country-guessing/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "vat-country-guessing",
    "models": [
      "jpt"
    ],
    "defaultModel": "jpt",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "unknown"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "text",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/website-classification/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "website-classification",
    "models": [
      "jpt"
    ],
    "defaultModel": "jpt",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "unknown"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "text",
        "required": false
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/text/text/word-alignment/",
    "inputType": "text",
    "outputType": "text",
    "taskName": "word-alignment",
    "models": [
      "bert-base-multilingual-cased"
    ],
    "defaultModel": "bert-base-multilingual-cased",
    "inputBodyContentType": "application/x-www-form-urlencoded",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "string",
        "name": "input_string_language_1",
        "required": true
      },
      {
        "in": "formData",
        "type": "string",
        "name": "input_string_language_2",
        "required": true
      }
    ],
    "hasSamplesParam": false
  },
  {
    "url": "/video/text/action-classifications/",
    "inputType": "video",
    "outputType": "text",
    "taskName": "action-classifications",
    "models": [
      "kinetics--MCG-NJU/videomae-base-finetuned-kinetics",
      "kinetics--facebook/timesformer-base-finetuned-k400"
    ],
    "defaultModel": "kinetics--MCG-NJU/videomae-base-finetuned-kinetics",
    "inputBodyContentType": "multipart/form-data",
    "outputBodyContentType": {
      "type": "prediction-standard-output",
      "predictionType": "string"
    },
    "params": [
      {
        "in": "formData",
        "type": "video",
        "name": "video",
        "required": false
      },
      {
        "in": "formData",
        "type": "url",
        "name": "video_url",
        "required": false
      }
    ],
    "hasSamplesParam": false
  }
];