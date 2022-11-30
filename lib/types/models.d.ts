export declare const AUDIO_TEXT_AUDIO_TRANSCRIPTION_MODELS: readonly ["coqui_english_huge_vocab", "openai-whisper-base", "openai-whisper-large", "openai-whisper-medium", "openai-whisper-small", "openai-whisper-tiny"];
export declare const AUDIO_TEXT_AUDIO_TRANSCRIPTION_CONTENT_TYPE: "multipart/form-data";
export declare type AudioTextAudioTranscriptionModel = typeof AUDIO_TEXT_AUDIO_TRANSCRIPTION_MODELS[number];
export declare const AUDIO_TEXT_SPEAKER_DIARIZATION_MODELS: readonly ["pyannote-speaker_diarization"];
export declare const AUDIO_TEXT_SPEAKER_DIARIZATION_CONTENT_TYPE: "multipart/form-data";
export declare type AudioTextSpeakerDiarizationModel = typeof AUDIO_TEXT_SPEAKER_DIARIZATION_MODELS[number];
export declare const AUDIO_TEXT_SPEAKER_GENDER_CLASSIFICATION_MODELS: readonly ["inafoss-inaSpeechSegmenter"];
export declare const AUDIO_TEXT_SPEAKER_GENDER_CLASSIFICATION_CONTENT_TYPE: "multipart/form-data";
export declare type AudioTextSpeakerGenderClassificationModel = typeof AUDIO_TEXT_SPEAKER_GENDER_CLASSIFICATION_MODELS[number];
export declare const IMAGE_IMAGE_BACKGROUND_REMOVAL_MODELS: readonly ["mobilenet", "xception"];
export declare const IMAGE_IMAGE_BACKGROUND_REMOVAL_CONTENT_TYPE: "multipart/form-data";
export declare type ImageImageBackgroundRemovalModel = typeof IMAGE_IMAGE_BACKGROUND_REMOVAL_MODELS[number];
export declare const IMAGE_IMAGE_BACKGROUND_REPLACEMENT_MODELS: readonly ["mobilenet"];
export declare const IMAGE_IMAGE_BACKGROUND_REPLACEMENT_CONTENT_TYPE: "multipart/form-data";
export declare type ImageImageBackgroundReplacementModel = typeof IMAGE_IMAGE_BACKGROUND_REPLACEMENT_MODELS[number];
export declare const IMAGE_IMAGE_COLORIZATION_MODELS: readonly ["deoldify-artistic", "deoldify-stable", "mlhubber_colorize"];
export declare const IMAGE_IMAGE_COLORIZATION_CONTENT_TYPE: "multipart/form-data";
export declare type ImageImageColorizationModel = typeof IMAGE_IMAGE_COLORIZATION_MODELS[number];
export declare const IMAGE_IMAGE_DEBLURRING_MODELS: readonly ["CMFNet"];
export declare const IMAGE_IMAGE_DEBLURRING_CONTENT_TYPE: "multipart/form-data";
export declare type ImageImageDeblurringModel = typeof IMAGE_IMAGE_DEBLURRING_MODELS[number];
export declare const IMAGE_IMAGE_ENHANCEMENT_MODELS: readonly ["FiveK", "LOL"];
export declare const IMAGE_IMAGE_ENHANCEMENT_CONTENT_TYPE: "multipart/form-data";
export declare type ImageImageEnhancementModel = typeof IMAGE_IMAGE_ENHANCEMENT_MODELS[number];
export declare const IMAGE_IMAGE_FACE_BLURING_MODELS: readonly ["ageitgey"];
export declare const IMAGE_IMAGE_FACE_BLURING_CONTENT_TYPE: "multipart/form-data";
export declare type ImageImageFaceBluringModel = typeof IMAGE_IMAGE_FACE_BLURING_MODELS[number];
export declare const IMAGE_IMAGE_GUIDED_INPAINTING_MODELS: readonly ["stable-diffusion"];
export declare const IMAGE_IMAGE_GUIDED_INPAINTING_CONTENT_TYPE: "multipart/form-data";
export declare type ImageImageGuidedInpaintingModel = typeof IMAGE_IMAGE_GUIDED_INPAINTING_MODELS[number];
export declare const IMAGE_IMAGE_INPAINTING_MODELS: readonly ["fcf", "lama", "latent-diffusion", "mat", "zits"];
export declare const IMAGE_IMAGE_INPAINTING_CONTENT_TYPE: "multipart/form-data";
export declare type ImageImageInpaintingModel = typeof IMAGE_IMAGE_INPAINTING_MODELS[number];
export declare const IMAGE_IMAGE_SUPER_RESOLUTION_MODELS: readonly [];
export declare const IMAGE_IMAGE_SUPER_RESOLUTION_CONTENT_TYPE: "multipart/form-data";
export declare type ImageImageSuperResolutionModel = typeof IMAGE_IMAGE_SUPER_RESOLUTION_MODELS[number];
export declare const IMAGE_IMAGE_UNCOLORIZATION_MODELS: readonly ["v1"];
export declare const IMAGE_IMAGE_UNCOLORIZATION_CONTENT_TYPE: "multipart/form-data";
export declare type ImageImageUncolorizationModel = typeof IMAGE_IMAGE_UNCOLORIZATION_MODELS[number];
export declare const IMAGE_TEXT_CLASSIFICATION_MODELS: readonly ["alexnet", "convnext_base", "convnext_large", "convnext_small", "convnext_tiny", "densenet121", "densenet161", "densenet169", "densenet201", "efficientnet_b0", "efficientnet_b1_v1", "efficientnet_b1_v2", "efficientnet_b2", "efficientnet_b3", "efficientnet_b4", "efficientnet_b5", "efficientnet_b6", "efficientnet_b7", "efficientnet_v2_l", "efficientnet_v2_m", "efficientnet_v2_s", "googlenet", "googlenet_quantized_fbgemm_v1", "inception_v3", "inception_v3_fbgemm_v1", "mnasnet0_5", "mnasnet0_75", "mnasnet1_0", "mnasnet1_3", "mobilenet_v2_quantized_qnnpack_v1", "mobilenet_v2_v1", "mobilenet_v2_v2", "mobilenet_v3_large_quantized_qnnpack_v1", "mobilenet_v3_large_v1", "mobilenet_v3_large_v2", "mobilenet_v3_small", "regnet_x_16gf_v1", "regnet_x_16gf_v2", "regnet_x_1_6gf_v1", "regnet_x_1_6gf_v2", "regnet_x_32gf_v1", "regnet_x_32gf_v2", "regnet_x_3_2gf_v1", "regnet_x_3_2gf_v2", "regnet_x_400mf_v1", "regnet_x_400mf_v2", "regnet_x_800mf_v1", "regnet_x_800mf_v2", "regnet_x_8gf_v1", "regnet_x_8gf_v2", "regnet_y_128gf_swag_e2e_v1", "regnet_y_128gf_swag_linear_v1", "regnet_y_16gf_swag_e2e_v1", "regnet_y_16gf_swag_linear_v1", "regnet_y_16gf_v1", "regnet_y_16gf_v2", "regnet_y_1_6gf_v1", "regnet_y_1_6gf_v2", "regnet_y_32gf_swag_e2e_v1", "regnet_y_32gf_swag_linear_v1", "regnet_y_32gf_v1", "regnet_y_32gf_v2", "regnet_y_3_2gf_v1", "regnet_y_3_2gf_v2", "regnet_y_400mf_v1", "regnet_y_400mf_v2", "regnet_y_8gf_v1", "regnet_y_8gf_v2", "resnet152_v1", "resnet152_v2", "resnet18", "resnet18_quantized_fbgemm_v1", "resnet34", "resnet50_quantized_fbgemm_v1", "resnet50_quantized_fbgemm_v2", "resnet50_v1", "resnet50_v2", "resnext101_32x8d_quantized_fbgemm_v1", "resnext101_32x8d_quantized_fbgemm_v2", "resnext101_32x8d_v1", "resnext101_32x8d_v2", "resnext101_64x4d_quantized_fbgemm_v1", "resnext101_64x4d_v1", "resnext50_32x4d_v1", "resnext50_32x4d_v2", "shufflenet_v2_x0_5", "shufflenet_v2_x0_5_quantized_fbgemm_v1", "shufflenet_v2_x1_0", "shufflenet_v2_x1_0_quantized_fbgemm_v1", "shufflenet_v2_x1_5", "shufflenet_v2_x1_5_quantized_fbgemm_v1", "shufflenet_v2_x2_0", "shufflenet_v2_x2_0_quantized_fbgemm_v1", "squeezenet1_0", "squeezenet1_1", "swin_b", "swin_s", "swin_t", "vgg11", "vgg11_bn", "vgg13", "vgg13_bn", "vgg16_bn", "vgg16_v1", "vgg19", "vgg19_bn", "vit_b_16_swag_e2e_v1", "vit_b_16_swag_linear_v1", "vit_b_16_v1", "vit_b_32", "vit_h_14_swag_e2e_v1", "vit_h_14_swag_linear_v1", "vit_l_16_swag_e2e_v1", "vit_l_16_swag_linear_v1", "vit_l_16_v1", "vit_l_32", "wide_resnet101_2_v1", "wide_resnet101_2_v2"];
export declare const IMAGE_TEXT_CLASSIFICATION_CONTENT_TYPE: "multipart/form-data";
export declare type ImageTextClassificationModel = typeof IMAGE_TEXT_CLASSIFICATION_MODELS[number];
export declare const IMAGE_TEXT_OCR_MODELS: readonly ["easy-ocr", "tesseract-default", "tesseract-denoising", "textract-extractor"];
export declare const IMAGE_TEXT_OCR_CONTENT_TYPE: "multipart/form-data";
export declare type ImageTextOcrModel = typeof IMAGE_TEXT_OCR_MODELS[number];
export declare const TEXT_IMAGE_IMAGE_GENERATION_MODELS: readonly ["dream-studio", "stable-diffusion"];
export declare const TEXT_IMAGE_IMAGE_GENERATION_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextImageImageGenerationModel = typeof TEXT_IMAGE_IMAGE_GENERATION_MODELS[number];
export declare const TEXT_TEXT_AD_GENERATION_MODELS: readonly ["gpt-j"];
export declare const TEXT_TEXT_AD_GENERATION_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextAdGenerationModel = typeof TEXT_TEXT_AD_GENERATION_MODELS[number];
export declare const TEXT_TEXT_ADDRESS_FORMATTING_MODELS: readonly ["geopy-formatter"];
export declare const TEXT_TEXT_ADDRESS_FORMATTING_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextAddressFormattingModel = typeof TEXT_TEXT_ADDRESS_FORMATTING_MODELS[number];
export declare const TEXT_TEXT_AGE_FROM_NAME_MODELS: readonly ["jpt"];
export declare const TEXT_TEXT_AGE_FROM_NAME_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextAgeFromNameModel = typeof TEXT_TEXT_AGE_FROM_NAME_MODELS[number];
export declare const TEXT_TEXT_ANONYMIZATION_MODELS: readonly ["ms-presidio"];
export declare const TEXT_TEXT_ANONYMIZATION_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextAnonymizationModel = typeof TEXT_TEXT_ANONYMIZATION_MODELS[number];
export declare const TEXT_TEXT_ARTICLE_GENERATION_MODELS: readonly ["fast-gpt-j"];
export declare const TEXT_TEXT_ARTICLE_GENERATION_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextArticleGenerationModel = typeof TEXT_TEXT_ARTICLE_GENERATION_MODELS[number];
export declare const TEXT_TEXT_AUTOCORRECT_MODELS: readonly ["flexudy-t5-base-multi-sentence-doctor"];
export declare const TEXT_TEXT_AUTOCORRECT_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextAutocorrectModel = typeof TEXT_TEXT_AUTOCORRECT_MODELS[number];
export declare const TEXT_TEXT_BULLET_POINT_GENERATION_MODELS: readonly ["jpt"];
export declare const TEXT_TEXT_BULLET_POINT_GENERATION_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextBulletPointGenerationModel = typeof TEXT_TEXT_BULLET_POINT_GENERATION_MODELS[number];
export declare const TEXT_TEXT_COMMAND_GENERATION_MODELS: readonly ["jpt"];
export declare const TEXT_TEXT_COMMAND_GENERATION_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextCommandGenerationModel = typeof TEXT_TEXT_COMMAND_GENERATION_MODELS[number];
export declare const TEXT_TEXT_COMPANY_CATEGORIZATION_MODELS: readonly ["jpt"];
export declare const TEXT_TEXT_COMPANY_CATEGORIZATION_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextCompanyCategorizationModel = typeof TEXT_TEXT_COMPANY_CATEGORIZATION_MODELS[number];
export declare const TEXT_TEXT_COMPANY_NAME_NORMALIZATION_MODELS: readonly ["jpt"];
export declare const TEXT_TEXT_COMPANY_NAME_NORMALIZATION_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextCompanyNameNormalizationModel = typeof TEXT_TEXT_COMPANY_NAME_NORMALIZATION_MODELS[number];
export declare const TEXT_TEXT_COMPANY_STOCK_CODE_MODELS: readonly ["jpt"];
export declare const TEXT_TEXT_COMPANY_STOCK_CODE_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextCompanyStockCodeModel = typeof TEXT_TEXT_COMPANY_STOCK_CODE_MODELS[number];
export declare const TEXT_TEXT_CONVERSATION_SUMMARIZATION_MODELS: readonly ["bart-large-xsum-samsum"];
export declare const TEXT_TEXT_CONVERSATION_SUMMARIZATION_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextConversationSummarizationModel = typeof TEXT_TEXT_CONVERSATION_SUMMARIZATION_MODELS[number];
export declare const TEXT_TEXT_COUNTRY_FROM_NAME_MODELS: readonly ["jpt"];
export declare const TEXT_TEXT_COUNTRY_FROM_NAME_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextCountryFromNameModel = typeof TEXT_TEXT_COUNTRY_FROM_NAME_MODELS[number];
export declare const TEXT_TEXT_DATE_CLEANING_MODELS: readonly ["dataprep-formatter"];
export declare const TEXT_TEXT_DATE_CLEANING_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextDateCleaningModel = typeof TEXT_TEXT_DATE_CLEANING_MODELS[number];
export declare const TEXT_TEXT_EMOTION_RECOGNITION_MODELS: readonly ["distilbert-base-uncased-emotion", "mrm8488-t5-base-finetuned-emotion"];
export declare const TEXT_TEXT_EMOTION_RECOGNITION_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextEmotionRecognitionModel = typeof TEXT_TEXT_EMOTION_RECOGNITION_MODELS[number];
export declare const TEXT_TEXT_GENDER_FROM_NAME_MODELS: readonly ["jpt"];
export declare const TEXT_TEXT_GENDER_FROM_NAME_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextGenderFromNameModel = typeof TEXT_TEXT_GENDER_FROM_NAME_MODELS[number];
export declare const TEXT_TEXT_GPS_ADDRESS_FORMATTING_MODELS: readonly ["geopy-formatter"];
export declare const TEXT_TEXT_GPS_ADDRESS_FORMATTING_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextGpsAddressFormattingModel = typeof TEXT_TEXT_GPS_ADDRESS_FORMATTING_MODELS[number];
export declare const TEXT_TEXT_GPT3_MODELS: readonly ["jpt"];
export declare const TEXT_TEXT_GPT3_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextGpt3Model = typeof TEXT_TEXT_GPT3_MODELS[number];
export declare const TEXT_TEXT_GUESS_CITY_MODELS: readonly ["jpt"];
export declare const TEXT_TEXT_GUESS_CITY_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextGuessCityModel = typeof TEXT_TEXT_GUESS_CITY_MODELS[number];
export declare const TEXT_TEXT_GUESS_COUNTRY_MODELS: readonly ["jpt"];
export declare const TEXT_TEXT_GUESS_COUNTRY_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextGuessCountryModel = typeof TEXT_TEXT_GUESS_COUNTRY_MODELS[number];
export declare const TEXT_TEXT_HATE_SPEECH_DETECTION_MODELS: readonly ["byt5-base-tweet-hate-detection", "distilbert-base-uncased-emotion"];
export declare const TEXT_TEXT_HATE_SPEECH_DETECTION_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextHateSpeechDetectionModel = typeof TEXT_TEXT_HATE_SPEECH_DETECTION_MODELS[number];
export declare const TEXT_TEXT_HEADLINE_GENERATION_MODELS: readonly ["jpt", "michau-t5-base-en-generate-headline"];
export declare const TEXT_TEXT_HEADLINE_GENERATION_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextHeadlineGenerationModel = typeof TEXT_TEXT_HEADLINE_GENERATION_MODELS[number];
export declare const TEXT_TEXT_INTENT_CLASSIFICATION_MODELS: readonly ["fast-gpt-j"];
export declare const TEXT_TEXT_INTENT_CLASSIFICATION_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextIntentClassificationModel = typeof TEXT_TEXT_INTENT_CLASSIFICATION_MODELS[number];
export declare const TEXT_TEXT_KEYWORD_EXTRACTION_MODELS: readonly ["keybert-paraphrase-multilingual-MiniLM-L12-v2"];
export declare const TEXT_TEXT_KEYWORD_EXTRACTION_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextKeywordExtractionModel = typeof TEXT_TEXT_KEYWORD_EXTRACTION_MODELS[number];
export declare const TEXT_TEXT_LANGUAGE_DETECTION_MODELS: readonly ["jpt", "papluca_xlm-roberta-base-language-detection_deepspeed", "toftrup-etal-2021"];
export declare const TEXT_TEXT_LANGUAGE_DETECTION_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextLanguageDetectionModel = typeof TEXT_TEXT_LANGUAGE_DETECTION_MODELS[number];
export declare const TEXT_TEXT_LANGUAGE_GENERATION_MODELS: readonly ["EleutherAI-gpt-neo-2_7B", "bloom-560m"];
export declare const TEXT_TEXT_LANGUAGE_GENERATION_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextLanguageGenerationModel = typeof TEXT_TEXT_LANGUAGE_GENERATION_MODELS[number];
export declare const TEXT_TEXT_NAMED_ENTITY_RECOGNITION_MODELS: readonly ["dbmdz-bert-large-cased-finetuned-conll03-english"];
export declare const TEXT_TEXT_NAMED_ENTITY_RECOGNITION_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextNamedEntityRecognitionModel = typeof TEXT_TEXT_NAMED_ENTITY_RECOGNITION_MODELS[number];
export declare const TEXT_TEXT_NEXT_SENTENCE_PREDICTION_MODELS: readonly ["bert-base-uncased"];
export declare const TEXT_TEXT_NEXT_SENTENCE_PREDICTION_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextNextSentencePredictionModel = typeof TEXT_TEXT_NEXT_SENTENCE_PREDICTION_MODELS[number];
export declare const TEXT_TEXT_NEXT_WORD_PREDICTION_MODELS: readonly ["albert-base-v2", "bert-base-uncased", "distilbert-base-uncased", "roberta-base"];
export declare const TEXT_TEXT_NEXT_WORD_PREDICTION_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextNextWordPredictionModel = typeof TEXT_TEXT_NEXT_WORD_PREDICTION_MODELS[number];
export declare const TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_MODELS: readonly ["sentdex-GPyT"];
export declare const TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextProgrammingLanguageGenerationModel = typeof TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_MODELS[number];
export declare const TEXT_TEXT_PUNCTUATION_RESTORATION_MODELS: readonly ["kredor-punctuate-all"];
export declare const TEXT_TEXT_PUNCTUATION_RESTORATION_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextPunctuationRestorationModel = typeof TEXT_TEXT_PUNCTUATION_RESTORATION_MODELS[number];
export declare const TEXT_TEXT_QUESTION_ANSWERING_MODELS: readonly ["deepset-roberta-base-squad2", "deepset_bert-base-cased-squad2", "distilbert-base-cased-distilled-squad", "mfeb-albert-xxlarge-v2-squad2", "mrm8488-bert-tiny-5-finetuned-squadv2"];
export declare const TEXT_TEXT_QUESTION_ANSWERING_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextQuestionAnsweringModel = typeof TEXT_TEXT_QUESTION_ANSWERING_MODELS[number];
export declare const TEXT_TEXT_SENTENCE_PARAPHRASER_MODELS: readonly ["ramsrigouthamg-t5-large-paraphraser-diverse-high-quality", "ramsrigouthamg-t5_sentence_paraphraser"];
export declare const TEXT_TEXT_SENTENCE_PARAPHRASER_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextSentenceParaphraserModel = typeof TEXT_TEXT_SENTENCE_PARAPHRASER_MODELS[number];
export declare const TEXT_TEXT_SENTIMENT_ANALYSIS_MODELS: readonly ["distilbert-base-uncased", "distilbert-base-uncased-finetuned-sst-2-english", "zero-shot-classification-facebook-bart-large-mnli"];
export declare const TEXT_TEXT_SENTIMENT_ANALYSIS_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextSentimentAnalysisModel = typeof TEXT_TEXT_SENTIMENT_ANALYSIS_MODELS[number];
export declare const TEXT_TEXT_SIMILARITY_MODELS: readonly ["all-MiniLM-L6-v2"];
export declare const TEXT_TEXT_SIMILARITY_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextSimilarityModel = typeof TEXT_TEXT_SIMILARITY_MODELS[number];
export declare const TEXT_TEXT_SUMMARIZATION_MODELS: readonly ["all-MiniLM-L6-v2", "bart-large-cnn"];
export declare const TEXT_TEXT_SUMMARIZATION_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextSummarizationModel = typeof TEXT_TEXT_SUMMARIZATION_MODELS[number];
export declare const TEXT_TEXT_TRANSLATION_MODELS: readonly ["facebook-nllb-200-distilled-600M", "jpt"];
export declare const TEXT_TEXT_TRANSLATION_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextTranslationModel = typeof TEXT_TEXT_TRANSLATION_MODELS[number];
export declare const TEXT_TEXT_VAT_COUNTRY_GUESSING_MODELS: readonly ["jpt"];
export declare const TEXT_TEXT_VAT_COUNTRY_GUESSING_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextVatCountryGuessingModel = typeof TEXT_TEXT_VAT_COUNTRY_GUESSING_MODELS[number];
export declare const TEXT_TEXT_WEBSITE_CLASSIFICATION_MODELS: readonly ["jpt"];
export declare const TEXT_TEXT_WEBSITE_CLASSIFICATION_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextWebsiteClassificationModel = typeof TEXT_TEXT_WEBSITE_CLASSIFICATION_MODELS[number];
export declare const TEXT_TEXT_WORD_ALIGNMENT_MODELS: readonly ["bert-base-multilingual-cased"];
export declare const TEXT_TEXT_WORD_ALIGNMENT_CONTENT_TYPE: "application/x-www-form-urlencoded";
export declare type TextTextWordAlignmentModel = typeof TEXT_TEXT_WORD_ALIGNMENT_MODELS[number];
