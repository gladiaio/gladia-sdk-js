# API

Pay attention default model may be outdated.
The default model of this doc is designed on SDK generation time.
The runtime default model is defined on the GladIA server.

## AUDIO => TEXT

### `audio-transcription`

#### `models`

- coqui_english_huge_vocab
- openai-whisper--base
- openai-whisper--large
- openai-whisper--large-v1
- openai-whisper--large-v2
- openai-whisper--medium
- openai-whisper--small
- **openai-whisper--tiny (default)**

#### other params

- `audio`: audio
- `audio_url`: url
- `language`: string *(required)*

### `speaker-diarization`

#### `models`

- **pyannote-speaker_diarization (default)**

#### other params

- `audio`: audio
- `audio_url`: url

### `speaker-gender-classification`

#### `models`

- **inafoss-inaSpeechSegmenter (default)**

#### other params

- `audio`: audio
- `audio_url`: url

## IMAGE => IMAGE

### `background-removal`

#### `models`

- **mobilenet (default)**
- xception

#### other params

- `image`: image
- `image_url`: url

### `background-replacement`

#### `models`

- **mobilenet (default)**

#### other params

- `original_image`: image
- `original_image_url`: url
- `background_image`: image
- `background_image_url`: url
- `alignment`: enum *(required)*
  - *`center`*
  - *`top`*
  - *`bottom`*
  - *`left`*
  - *`right`*
  - *`top-left`*
  - *`top-center`*
  - *`top-right`*
  - *`bottom-left`*
  - *`bottom-center`*
  - *`bottom-right`*
  - *`cropped`*

### `colorization`

#### `models`

- deoldify-artistic
- deoldify-stable
- **mlhubber_colorize (default)**

#### other params

- `image`: image
- `image_url`: url

### `deblurring`

#### `models`

- **CMFNet (default)**

#### other params

- `image`: image
- `image_url`: url

### `enhancement`

#### `models`

- **FiveK (default)**
- LOL

#### other params

- `image`: image
- `image_url`: url

### `face-bluring`

#### `models`

- **ageitgey (default)**

#### other params

- `image`: image
- `image_url`: url

### `guided-inpainting`

#### `models`

- compvis
- **runwayml (default)**

#### other params

- `original_image`: image
- `original_image_url`: url
- `mask_image`: image
- `mask_image_url`: url
- `prompt`: string *(required)*

### `image-guided-inpainting`

#### `models`

- **fantasy-studio (default)**

#### other params

- `original_image`: image
- `original_image_url`: url
- `example_image`: image
- `example_image_url`: url
- `mask_image`: image
- `mask_image_url`: url
- `seed`: integer *(required)*
- `steps`: integer *(required)*
- `guidance_scale`: integer *(required)*

### `inpainting`

#### `models`

- fcf
- lama
- latent-diffusion
- mat
- **zits (default)**

#### other params

- `original_image`: image
- `original_image_url`: url
- `mask_image`: image
- `mask_image_url`: url

### `uncolorization`

#### `models`

- **v1 (default)**

#### other params

- `image`: image
- `image_url`: url

## IMAGE => TEXT

### `classification`

#### `models`

- **alexnet (default)**
- convnext_base
- convnext_large
- convnext_small
- convnext_tiny
- densenet121
- densenet161
- densenet169
- densenet201
- efficientnet_b0
- efficientnet_b1_v1
- efficientnet_b1_v2
- efficientnet_b2
- efficientnet_b3
- efficientnet_b4
- efficientnet_b5
- efficientnet_b6
- efficientnet_b7
- efficientnet_v2_l
- efficientnet_v2_m
- efficientnet_v2_s
- googlenet
- googlenet_quantized_fbgemm_v1
- inception_v3
- inception_v3_fbgemm_v1
- mnasnet0_5
- mnasnet0_75
- mnasnet1_0
- mnasnet1_3
- mobilenet_v2_quantized_qnnpack_v1
- mobilenet_v2_v1
- mobilenet_v2_v2
- mobilenet_v3_large_quantized_qnnpack_v1
- mobilenet_v3_large_v1
- mobilenet_v3_large_v2
- mobilenet_v3_small
- regnet_x_16gf_v1
- regnet_x_16gf_v2
- regnet_x_1_6gf_v1
- regnet_x_1_6gf_v2
- regnet_x_32gf_v1
- regnet_x_32gf_v2
- regnet_x_3_2gf_v1
- regnet_x_3_2gf_v2
- regnet_x_400mf_v1
- regnet_x_400mf_v2
- regnet_x_800mf_v1
- regnet_x_800mf_v2
- regnet_x_8gf_v1
- regnet_x_8gf_v2
- regnet_y_128gf_swag_e2e_v1
- regnet_y_128gf_swag_linear_v1
- regnet_y_16gf_swag_e2e_v1
- regnet_y_16gf_swag_linear_v1
- regnet_y_16gf_v1
- regnet_y_16gf_v2
- regnet_y_1_6gf_v1
- regnet_y_1_6gf_v2
- regnet_y_32gf_swag_e2e_v1
- regnet_y_32gf_swag_linear_v1
- regnet_y_32gf_v1
- regnet_y_32gf_v2
- regnet_y_3_2gf_v1
- regnet_y_3_2gf_v2
- regnet_y_400mf_v1
- regnet_y_400mf_v2
- regnet_y_8gf_v1
- regnet_y_8gf_v2
- resnet152_v1
- resnet152_v2
- resnet18
- resnet18_quantized_fbgemm_v1
- resnet34
- resnet50_quantized_fbgemm_v1
- resnet50_quantized_fbgemm_v2
- resnet50_v1
- resnet50_v2
- resnext101_32x8d_quantized_fbgemm_v1
- resnext101_32x8d_quantized_fbgemm_v2
- resnext101_32x8d_v1
- resnext101_32x8d_v2
- resnext101_64x4d_quantized_fbgemm_v1
- resnext101_64x4d_v1
- resnext50_32x4d_v1
- resnext50_32x4d_v2
- shufflenet_v2_x0_5
- shufflenet_v2_x0_5_quantized_fbgemm_v1
- shufflenet_v2_x1_0
- shufflenet_v2_x1_0_quantized_fbgemm_v1
- shufflenet_v2_x1_5
- shufflenet_v2_x1_5_quantized_fbgemm_v1
- shufflenet_v2_x2_0
- shufflenet_v2_x2_0_quantized_fbgemm_v1
- squeezenet1_0
- squeezenet1_1
- swin_b
- swin_s
- swin_t
- vgg11
- vgg11_bn
- vgg13
- vgg13_bn
- vgg16_bn
- vgg16_v1
- vgg19
- vgg19_bn
- vit_b_16_swag_e2e_v1
- vit_b_16_swag_linear_v1
- vit_b_16_v1
- vit_b_32
- vit_h_14_swag_e2e_v1
- vit_h_14_swag_linear_v1
- vit_l_16_swag_e2e_v1
- vit_l_16_swag_linear_v1
- vit_l_16_v1
- vit_l_32
- wide_resnet101_2_v1
- wide_resnet101_2_v2

#### other params

- `image`: image
- `image_url`: url
- `top_k`: integer *(required)*

### `ocr`

#### `models`

- easy-ocr
- tesseract-default
- tesseract-denoising
- **textract-extractor (default)**

#### other params

- `image`: image
- `image_url`: url
- `source_language`: string *(required)*

## TEXT => IMAGE

### `image-generation`

#### `models`

- dream-studio
- stable-diffusion--compvis-sd-14
- stable-diffusion--runwayml-sd-15
- stable-diffusion--stabilityai-sd-20
- **stable-diffusion--stabilityai-sd-21 (default)**

#### other params

- `prompt`: string *(required)*
- `samples`: integer
- `steps`: integer
- `seed`: integer

## TEXT => TEXT

### `address-formatting`

#### `models`

- **geopy-formatter (default)**

#### other params

- `address`: string *(required)*

### `age-from-name`

#### `models`

- **jpt (default)**

#### other params

- `name`: string

### `anonymization`

#### `models`

- **ms-presidio (default)**

#### other params

- `language`: string *(required)*
- `entities`: string *(required)*
- `text`: string *(required)*

### `autocorrect`

#### `models`

- **flexudy-t5-base-multi-sentence-doctor (default)**

#### other params

- `sentence`: string *(required)*

### `bullet-point-generation`

#### `models`

- **jpt (default)**

#### other params

- `text`: string
- `bullets`: integer

### `command-generation`

#### `models`

- **jpt (default)**

#### other params

- `text`: string

### `company-categorization`

#### `models`

- **jpt (default)**

#### other params

- `text`: string

### `company-name-normalization`

#### `models`

- **jpt (default)**

#### other params

- `text`: string

### `company-stock-code`

#### `models`

- **jpt (default)**

#### other params

- `text`: string

### `conversation-summarization`

#### `models`

- **bart-large-xsum-samsum (default)**

#### other params

- `text`: string *(required)*

### `country-from-name`

#### `models`

- **jpt (default)**

#### other params

- `name`: string

### `date-cleaning`

#### `models`

- **dataprep-formatter (default)**

#### other params

- `date`: string *(required)*

### `emotion-recognition`

#### `models`

- **mrm8488-t5-base-finetuned-emotion (default)**

#### other params

- `text`: string *(required)*

### `gender-from-name`

#### `models`

- **jpt (default)**

#### other params

- `name`: string

### `gps-address-formatting`

#### `models`

- **geopy-formatter (default)**

#### other params

- `latitude`: float *(required)*
- `longitude`: float *(required)*

### `gpt3`

#### `models`

- **jpt (default)**

#### other params

- `text`: string

### `guess-city`

#### `models`

- **jpt (default)**

#### other params

- `text`: string

### `guess-country`

#### `models`

- **jpt (default)**

#### other params

- `text`: string

### `guess-intent`

#### `models`

- **jpt (default)**

#### other params

- `text`: string

### `hate-speech-detection`

#### `models`

- byt5-base-tweet-hate-detection
- **distilbert-base-uncased-emotion (default)**
- dkleczek_Polish-Hate-Speech-Detection-Herbert-Large

#### other params

- `text`: string *(required)*

### `headline-generation`

#### `models`

- **jpt (default)**
- michau-t5-base-en-generate-headline

#### other params

- `text`: string *(required)*
- `max_length`: integer *(required)*

### `keyword-extraction`

#### `models`

- **keybert-paraphrase-multilingual-MiniLM-L12-v2 (default)**

#### other params

- `text`: string *(required)*
- `top_k`: integer

### `language-codes`

#### `models`

- **language-codes (default)**

#### other params

- `language_code`: string *(required)*
- `display_output_language`: string *(required)*

### `language-detection`

#### `models`

- **jpt (default)**
- papluca_xlm-roberta-base-language-detection_deepspeed
- toftrup-etal-2021

#### other params

- `text`: string *(required)*

### `language-generation`

#### `models`

- EleutherAI-gpt-neo-2_7B
- bloom-560m
- **gpt2_xl (default)**

#### other params

- `text`: string *(required)*

### `named-entity-recognition`

#### `models`

- dbmdz-bert-large-cased-finetuned-conll03-english_deepspeed
- **spacy-multilingual (default)**

#### other params

- `text`: string *(required)*

### `next-sentence-prediction`

#### `models`

- **bert-base-uncased (default)**

#### other params

- `sentence_1`: string *(required)*
- `sentence_2`: string *(required)*

### `next-word-prediction`

#### `models`

- albert-base-v2
- bert-base-uncased
- **distilbert-base-uncased (default)**
- roberta-base

#### other params

- `sentence`: string *(required)*
- `top_k`: integer *(required)*

### `product-ownership`

#### `models`

- **jpt (default)**

#### other params

- `text`: string

### `product-sentiment`

#### `models`

- **jpt (default)**

#### other params

- `text`: string

### `programming-language-generation`

#### `models`

- **sentdex-GPyT (default)**

#### other params

- `code_snippet`: string *(required)*

### `punctuation-restoration`

#### `models`

- **oguhr-multilingualpunctuation (default)**

#### other params

- `sentence`: string *(required)*

### `question-answering`

#### `models`

- deepset-roberta-base-squad2
- deepset_bert-base-cased-squad2
- **deepset_roberta-large-squad2 (default)**
- distilbert-base-cased-distilled-squad
- mfeb-albert-xxlarge-v2-squad2
- mrm8488-bert-tiny-5-finetuned-squadv2

#### other params

- `context`: string *(required)*
- `question`: string *(required)*
- `top_k`: integer

### `sentence-paraphraser`

#### `models`

- **ramsrigouthamg-t5-large-paraphraser-diverse-high-quality (default)**
- ramsrigouthamg-t5_sentence_paraphraser

#### other params

- `context`: string *(required)*

### `sentiment-analysis`

#### `models`

- distilbert-base-uncased
- **distilbert-base-uncased-finetuned-sst-2-english (default)**
- zero-shot-classification-facebook-bart-large-mnli

#### other params

- `text`: string *(required)*

### `similarity`

#### `models`

- **all-MiniLM-L6-v2 (default)**

#### other params

- `sentence_1`: string *(required)*
- `sentence_2`: string *(required)*

### `speaker-recognition`

#### `models`

- **jpt (default)**

#### other params

- `text`: string

### `summarization`

#### `models`

- **all-MiniLM-L6-v2 (default)**

#### other params

- `text`: string *(required)*
- `source_language`: string *(required)*
- `min_length`: integer
- `max_length`: integer

### `translation`

#### `models`

- facebook-nllb-200-distilled-600M
- **jpt (default)**

#### other params

- `input_string`: string *(required)*
- `source_language`: string *(required)*
- `target_language`: string *(required)*

### `vat-country-guessing`

#### `models`

- **jpt (default)**

#### other params

- `text`: string

### `website-classification`

#### `models`

- **jpt (default)**

#### other params

- `text`: string

### `word-alignment`

#### `models`

- **bert-base-multilingual-cased (default)**

#### other params

- `input_string_language_1`: string *(required)*
- `input_string_language_2`: string *(required)*

## VIDEO => TEXT

### `action-classifications`

#### `models`

- **kinetics--MCG-NJU/videomae-base-finetuned-kinetics (default)**
- kinetics--facebook/timesformer-base-finetuned-k400

#### other params

- `video`: video
- `video_url`: url

> Generated file with "scripts/generate-sdk.ts"
