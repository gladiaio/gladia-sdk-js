/* Generated file with "scripts/generate-sdk.ts" */

import { FromAudio } from './from-audio'
import { FromAudioToText } from './from-audio-to-text'
import { FromImage } from './from-image'
import { FromImageToImage } from './from-image-to-image'
import { FromImageToText } from './from-image-to-text'
import { FromText } from './from-text'
import { FromTextToImage } from './from-text-to-image'
import { FromTextToText } from './from-text-to-text'
import { FromVideo } from './from-video'
import { FromVideoToText } from './from-video-to-text'
import {
  AudioTextAudioTranscriptionInputs,
  AudioTextSpeakerDiarizationInputs,
  AudioTextSpeakerGenderClassificationInputs,
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
  ImageTextClassificationInputs,
  ImageTextOcrInputs,
  TextImageImageGenerationInputs,
  TextTextAddressFormattingInputs,
  TextTextAgeFromNameInputs,
  TextTextAnonymizationInputs,
  TextTextAutocorrectInputs,
  TextTextBulletPointGenerationInputs,
  TextTextCommandGenerationInputs,
  TextTextCompanyCategorizationInputs,
  TextTextCompanyNameNormalizationInputs,
  TextTextCompanyStockCodeInputs,
  TextTextConversationSummarizationInputs,
  TextTextCountryFromNameInputs,
  TextTextDateCleaningInputs,
  TextTextEmotionRecognitionInputs,
  TextTextGenderFromNameInputs,
  TextTextGpsAddressFormattingInputs,
  TextTextGpt3Inputs,
  TextTextGuessCityInputs,
  TextTextGuessCountryInputs,
  TextTextGuessIntentInputs,
  TextTextHateSpeechDetectionInputs,
  TextTextHeadlineGenerationInputs,
  TextTextKeywordExtractionInputs,
  TextTextLanguageCodesInputs,
  TextTextLanguageDetectionInputs,
  TextTextLanguageGenerationInputs,
  TextTextNamedEntityRecognitionInputs,
  TextTextNextSentencePredictionInputs,
  TextTextNextWordPredictionInputs,
  TextTextProductOwnershipInputs,
  TextTextProductSentimentInputs,
  TextTextProgrammingLanguageGenerationInputs,
  TextTextPunctuationRestorationInputs,
  TextTextQuestionAnsweringInputs,
  TextTextSentenceParaphraserInputs,
  TextTextSentimentAnalysisInputs,
  TextTextSimilarityInputs,
  TextTextSpeakerRecognitionInputs,
  TextTextSummarizationInputs,
  TextTextTranslationInputs,
  TextTextVatCountryGuessingInputs,
  TextTextWebsiteClassificationInputs,
  TextTextWordAlignmentInputs,
  VideoTextActionClassificationsInputs,
} from './input-models'
import {
  AudioTextAudioTranscriptionOutputs,
  AudioTextSpeakerDiarizationOutputs,
  AudioTextSpeakerGenderClassificationOutputs,
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
  ImageTextClassificationOutputs,
  ImageTextOcrOutputs,
  TextImageImageGenerationOutputs,
  TextImageImageGenerationOutputsMultipleSamples,
  TextImageImageGenerationOutputsOneSample,
  TextTextAddressFormattingOutputs,
  TextTextAgeFromNameOutputs,
  TextTextAnonymizationOutputs,
  TextTextAutocorrectOutputs,
  TextTextBulletPointGenerationOutputs,
  TextTextCommandGenerationOutputs,
  TextTextCompanyCategorizationOutputs,
  TextTextCompanyNameNormalizationOutputs,
  TextTextCompanyStockCodeOutputs,
  TextTextConversationSummarizationOutputs,
  TextTextCountryFromNameOutputs,
  TextTextDateCleaningOutputs,
  TextTextEmotionRecognitionOutputs,
  TextTextGenderFromNameOutputs,
  TextTextGpsAddressFormattingOutputs,
  TextTextGpt3Outputs,
  TextTextGuessCityOutputs,
  TextTextGuessCountryOutputs,
  TextTextGuessIntentOutputs,
  TextTextHateSpeechDetectionOutputs,
  TextTextHeadlineGenerationOutputs,
  TextTextKeywordExtractionOutputs,
  TextTextLanguageCodesOutputs,
  TextTextLanguageDetectionOutputs,
  TextTextLanguageGenerationOutputs,
  TextTextNamedEntityRecognitionOutputs,
  TextTextNextSentencePredictionOutputs,
  TextTextNextWordPredictionOutputs,
  TextTextProductOwnershipOutputs,
  TextTextProductSentimentOutputs,
  TextTextProgrammingLanguageGenerationOutputs,
  TextTextPunctuationRestorationOutputs,
  TextTextQuestionAnsweringOutputs,
  TextTextSentenceParaphraserOutputs,
  TextTextSentimentAnalysisOutputs,
  TextTextSimilarityOutputs,
  TextTextSpeakerRecognitionOutputs,
  TextTextSummarizationOutputs,
  TextTextTranslationOutputs,
  TextTextVatCountryGuessingOutputs,
  TextTextWebsiteClassificationOutputs,
  TextTextWordAlignmentOutputs,
  VideoTextActionClassificationsOutputs,
} from './output-models';

export abstract class Shortcuts implements
  Omit<FromAudioToText, 'httpClient'>,
  Omit<FromImageToImage, 'httpClient'>,
  Omit<FromImageToText, 'httpClient'>,
  Omit<FromTextToImage, 'httpClient'>,
  Omit<FromTextToText, 'httpClient'>,
  Omit<FromVideoToText, 'httpClient'>
{

  abstract fromAudio(): FromAudio;

  // AUDIO => TEXT

  audioTranscription(args: AudioTextAudioTranscriptionInputs): Promise<AudioTextAudioTranscriptionOutputs> {
    return this.fromAudio().toText().audioTranscription(args);
  }

  speakerDiarization(args: AudioTextSpeakerDiarizationInputs): Promise<AudioTextSpeakerDiarizationOutputs> {
    return this.fromAudio().toText().speakerDiarization(args);
  }

  speakerGenderClassification(args: AudioTextSpeakerGenderClassificationInputs): Promise<AudioTextSpeakerGenderClassificationOutputs> {
    return this.fromAudio().toText().speakerGenderClassification(args);
  }

  abstract fromImage(): FromImage;

  // IMAGE => IMAGE

  backgroundRemoval(args: ImageImageBackgroundRemovalInputs): Promise<ImageImageBackgroundRemovalOutputs> {
    return this.fromImage().toImage().backgroundRemoval(args);
  }

  backgroundReplacement(args: ImageImageBackgroundReplacementInputs): Promise<ImageImageBackgroundReplacementOutputs> {
    return this.fromImage().toImage().backgroundReplacement(args);
  }

  colorization(args: ImageImageColorizationInputs): Promise<ImageImageColorizationOutputs> {
    return this.fromImage().toImage().colorization(args);
  }

  deblurring(args: ImageImageDeblurringInputs): Promise<ImageImageDeblurringOutputs> {
    return this.fromImage().toImage().deblurring(args);
  }

  enhancement(args: ImageImageEnhancementInputs): Promise<ImageImageEnhancementOutputs> {
    return this.fromImage().toImage().enhancement(args);
  }

  faceBluring(args: ImageImageFaceBluringInputs): Promise<ImageImageFaceBluringOutputs> {
    return this.fromImage().toImage().faceBluring(args);
  }

  guidedInpainting(args: ImageImageGuidedInpaintingInputs): Promise<ImageImageGuidedInpaintingOutputs> {
    return this.fromImage().toImage().guidedInpainting(args);
  }

  imageGuidedInpainting(args: ImageImageImageGuidedInpaintingInputs): Promise<ImageImageImageGuidedInpaintingOutputs> {
    return this.fromImage().toImage().imageGuidedInpainting(args);
  }

  inpainting(args: ImageImageInpaintingInputs): Promise<ImageImageInpaintingOutputs> {
    return this.fromImage().toImage().inpainting(args);
  }

  uncolorization(args: ImageImageUncolorizationInputs): Promise<ImageImageUncolorizationOutputs> {
    return this.fromImage().toImage().uncolorization(args);
  }

  // IMAGE => TEXT

  classification(args: ImageTextClassificationInputs): Promise<ImageTextClassificationOutputs> {
    return this.fromImage().toText().classification(args);
  }

  ocr(args: ImageTextOcrInputs): Promise<ImageTextOcrOutputs> {
    return this.fromImage().toText().ocr(args);
  }

  abstract fromText(): FromText;

  // TEXT => IMAGE

  imageGeneration(args: TextImageImageGenerationInputs & { samples: 1 }): Promise<TextImageImageGenerationOutputsOneSample>;
  imageGeneration(args: TextImageImageGenerationInputs): Promise<TextImageImageGenerationOutputsMultipleSamples>;
  imageGeneration(args: TextImageImageGenerationInputs): Promise<TextImageImageGenerationOutputs> {
    return this.fromText().toImage().imageGeneration(args);
  }

  // TEXT => TEXT

  addressFormatting(args: TextTextAddressFormattingInputs): Promise<TextTextAddressFormattingOutputs> {
    return this.fromText().toText().addressFormatting(args);
  }

  ageFromName(args: TextTextAgeFromNameInputs): Promise<TextTextAgeFromNameOutputs> {
    return this.fromText().toText().ageFromName(args);
  }

  anonymization(args: TextTextAnonymizationInputs): Promise<TextTextAnonymizationOutputs> {
    return this.fromText().toText().anonymization(args);
  }

  autocorrect(args: TextTextAutocorrectInputs): Promise<TextTextAutocorrectOutputs> {
    return this.fromText().toText().autocorrect(args);
  }

  bulletPointGeneration(args: TextTextBulletPointGenerationInputs): Promise<TextTextBulletPointGenerationOutputs> {
    return this.fromText().toText().bulletPointGeneration(args);
  }

  commandGeneration(args: TextTextCommandGenerationInputs): Promise<TextTextCommandGenerationOutputs> {
    return this.fromText().toText().commandGeneration(args);
  }

  companyCategorization(args: TextTextCompanyCategorizationInputs): Promise<TextTextCompanyCategorizationOutputs> {
    return this.fromText().toText().companyCategorization(args);
  }

  companyNameNormalization(args: TextTextCompanyNameNormalizationInputs): Promise<TextTextCompanyNameNormalizationOutputs> {
    return this.fromText().toText().companyNameNormalization(args);
  }

  companyStockCode(args: TextTextCompanyStockCodeInputs): Promise<TextTextCompanyStockCodeOutputs> {
    return this.fromText().toText().companyStockCode(args);
  }

  conversationSummarization(args: TextTextConversationSummarizationInputs): Promise<TextTextConversationSummarizationOutputs> {
    return this.fromText().toText().conversationSummarization(args);
  }

  countryFromName(args: TextTextCountryFromNameInputs): Promise<TextTextCountryFromNameOutputs> {
    return this.fromText().toText().countryFromName(args);
  }

  dateCleaning(args: TextTextDateCleaningInputs): Promise<TextTextDateCleaningOutputs> {
    return this.fromText().toText().dateCleaning(args);
  }

  emotionRecognition(args: TextTextEmotionRecognitionInputs): Promise<TextTextEmotionRecognitionOutputs> {
    return this.fromText().toText().emotionRecognition(args);
  }

  genderFromName(args: TextTextGenderFromNameInputs): Promise<TextTextGenderFromNameOutputs> {
    return this.fromText().toText().genderFromName(args);
  }

  gpsAddressFormatting(args: TextTextGpsAddressFormattingInputs): Promise<TextTextGpsAddressFormattingOutputs> {
    return this.fromText().toText().gpsAddressFormatting(args);
  }

  gpt3(args: TextTextGpt3Inputs): Promise<TextTextGpt3Outputs> {
    return this.fromText().toText().gpt3(args);
  }

  guessCity(args: TextTextGuessCityInputs): Promise<TextTextGuessCityOutputs> {
    return this.fromText().toText().guessCity(args);
  }

  guessCountry(args: TextTextGuessCountryInputs): Promise<TextTextGuessCountryOutputs> {
    return this.fromText().toText().guessCountry(args);
  }

  guessIntent(args: TextTextGuessIntentInputs): Promise<TextTextGuessIntentOutputs> {
    return this.fromText().toText().guessIntent(args);
  }

  hateSpeechDetection(args: TextTextHateSpeechDetectionInputs): Promise<TextTextHateSpeechDetectionOutputs> {
    return this.fromText().toText().hateSpeechDetection(args);
  }

  headlineGeneration(args: TextTextHeadlineGenerationInputs): Promise<TextTextHeadlineGenerationOutputs> {
    return this.fromText().toText().headlineGeneration(args);
  }

  keywordExtraction(args: TextTextKeywordExtractionInputs): Promise<TextTextKeywordExtractionOutputs> {
    return this.fromText().toText().keywordExtraction(args);
  }

  languageCodes(args: TextTextLanguageCodesInputs): Promise<TextTextLanguageCodesOutputs> {
    return this.fromText().toText().languageCodes(args);
  }

  languageDetection(args: TextTextLanguageDetectionInputs): Promise<TextTextLanguageDetectionOutputs> {
    return this.fromText().toText().languageDetection(args);
  }

  languageGeneration(args: TextTextLanguageGenerationInputs): Promise<TextTextLanguageGenerationOutputs> {
    return this.fromText().toText().languageGeneration(args);
  }

  namedEntityRecognition(args: TextTextNamedEntityRecognitionInputs): Promise<TextTextNamedEntityRecognitionOutputs> {
    return this.fromText().toText().namedEntityRecognition(args);
  }

  nextSentencePrediction(args: TextTextNextSentencePredictionInputs): Promise<TextTextNextSentencePredictionOutputs> {
    return this.fromText().toText().nextSentencePrediction(args);
  }

  nextWordPrediction(args: TextTextNextWordPredictionInputs): Promise<TextTextNextWordPredictionOutputs> {
    return this.fromText().toText().nextWordPrediction(args);
  }

  productOwnership(args: TextTextProductOwnershipInputs): Promise<TextTextProductOwnershipOutputs> {
    return this.fromText().toText().productOwnership(args);
  }

  productSentiment(args: TextTextProductSentimentInputs): Promise<TextTextProductSentimentOutputs> {
    return this.fromText().toText().productSentiment(args);
  }

  programmingLanguageGeneration(args: TextTextProgrammingLanguageGenerationInputs): Promise<TextTextProgrammingLanguageGenerationOutputs> {
    return this.fromText().toText().programmingLanguageGeneration(args);
  }

  punctuationRestoration(args: TextTextPunctuationRestorationInputs): Promise<TextTextPunctuationRestorationOutputs> {
    return this.fromText().toText().punctuationRestoration(args);
  }

  questionAnswering(args: TextTextQuestionAnsweringInputs): Promise<TextTextQuestionAnsweringOutputs> {
    return this.fromText().toText().questionAnswering(args);
  }

  sentenceParaphraser(args: TextTextSentenceParaphraserInputs): Promise<TextTextSentenceParaphraserOutputs> {
    return this.fromText().toText().sentenceParaphraser(args);
  }

  sentimentAnalysis(args: TextTextSentimentAnalysisInputs): Promise<TextTextSentimentAnalysisOutputs> {
    return this.fromText().toText().sentimentAnalysis(args);
  }

  similarity(args: TextTextSimilarityInputs): Promise<TextTextSimilarityOutputs> {
    return this.fromText().toText().similarity(args);
  }

  speakerRecognition(args: TextTextSpeakerRecognitionInputs): Promise<TextTextSpeakerRecognitionOutputs> {
    return this.fromText().toText().speakerRecognition(args);
  }

  summarization(args: TextTextSummarizationInputs): Promise<TextTextSummarizationOutputs> {
    return this.fromText().toText().summarization(args);
  }

  translation(args: TextTextTranslationInputs): Promise<TextTextTranslationOutputs> {
    return this.fromText().toText().translation(args);
  }

  vatCountryGuessing(args: TextTextVatCountryGuessingInputs): Promise<TextTextVatCountryGuessingOutputs> {
    return this.fromText().toText().vatCountryGuessing(args);
  }

  websiteClassification(args: TextTextWebsiteClassificationInputs): Promise<TextTextWebsiteClassificationOutputs> {
    return this.fromText().toText().websiteClassification(args);
  }

  wordAlignment(args: TextTextWordAlignmentInputs): Promise<TextTextWordAlignmentOutputs> {
    return this.fromText().toText().wordAlignment(args);
  }

  abstract fromVideo(): FromVideo;

  // VIDEO => TEXT

  actionClassifications(args: VideoTextActionClassificationsInputs): Promise<VideoTextActionClassificationsOutputs> {
    return this.fromVideo().toText().actionClassifications(args);
  }

}
