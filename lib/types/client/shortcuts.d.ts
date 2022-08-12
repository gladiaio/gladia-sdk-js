import { FromAudio } from './from-audio';
import { FromAudioToText } from './from-audio-to-text';
import { FromImage } from './from-image';
import { FromImageToImage } from './from-image-to-image';
import { FromImageToText } from './from-image-to-text';
import { FromText } from './from-text';
import { FromTextToText } from './from-text-to-text';
import { AudioTextAudioTranscriptionInputs, ImageImageBackgroundRemovalInputs, ImageImageColorizationInputs, ImageImageFaceBluringInputs, ImageImageUncolorizationInputs, ImageTextAsciifyInputs, ImageTextClassificationInputs, ImageTextOcrInputs, TextTextAutocorrectInputs, TextTextEmotionRecognitionInputs, TextTextHateSpeechDetectionInputs, TextTextKeywordExtractionInputs, TextTextLanguageDetectionInputs, TextTextLanguageGenerationInputs, TextTextNamedEntityRecognitionInputs, TextTextNextSentencePredictionInputs, TextTextNextWordPredictionInputs, TextTextPluralInputs, TextTextProgrammingLanguageGenerationInputs, TextTextQuestionAnsweringInputs, TextTextSentenceParaphraserInputs, TextTextSentimentAnalysisInputs, TextTextSimilarityInputs, TextTextWordAlignmentInputs } from './input-models';
export declare abstract class Shortcuts implements Omit<FromAudioToText, 'httpClient'>, Omit<FromImageToImage, 'httpClient'>, Omit<FromImageToText, 'httpClient'>, Omit<FromTextToText, 'httpClient'> {
    abstract fromAudio(): FromAudio;
    audioTranscription(args: AudioTextAudioTranscriptionInputs): Promise<import("./output-models").AudioTextAudioTranscriptionOutputs>;
    abstract fromImage(): FromImage;
    backgroundRemoval(args: ImageImageBackgroundRemovalInputs): Promise<ArrayBuffer>;
    colorization(args: ImageImageColorizationInputs): Promise<ArrayBuffer>;
    faceBluring(args: ImageImageFaceBluringInputs): Promise<ArrayBuffer>;
    uncolorization(args: ImageImageUncolorizationInputs): Promise<ArrayBuffer>;
    asciify(args: ImageTextAsciifyInputs): Promise<import("./output-models").ImageTextAsciifyOutputs>;
    classification(args: ImageTextClassificationInputs): Promise<import("./output-models").ImageTextClassificationOutputs>;
    ocr(args: ImageTextOcrInputs): Promise<import("./output-models").ImageTextOcrOutputs>;
    abstract fromText(): FromText;
    autocorrect(args: TextTextAutocorrectInputs): Promise<import("./output-models").TextTextAutocorrectOutputs>;
    emotionRecognition(args: TextTextEmotionRecognitionInputs): Promise<import("./output-models").TextTextEmotionRecognitionOutputs>;
    hateSpeechDetection(args: TextTextHateSpeechDetectionInputs): Promise<import("./output-models").TextTextHateSpeechDetectionOutputs>;
    keywordExtraction(args: TextTextKeywordExtractionInputs): Promise<import("./output-models").TextTextKeywordExtractionOutputs>;
    languageDetection(args: TextTextLanguageDetectionInputs): Promise<import("./output-models").TextTextLanguageDetectionOutputs>;
    languageGeneration(args: TextTextLanguageGenerationInputs): Promise<import("./output-models").TextTextLanguageGenerationOutputs>;
    namedEntityRecognition(args: TextTextNamedEntityRecognitionInputs): Promise<import("./output-models").TextTextNamedEntityRecognitionOutputs>;
    nextSentencePrediction(args: TextTextNextSentencePredictionInputs): Promise<import("./output-models").TextTextNextSentencePredictionOutputs>;
    nextWordPrediction(args: TextTextNextWordPredictionInputs): Promise<import("./output-models").TextTextNextWordPredictionOutputs>;
    plural(args: TextTextPluralInputs): Promise<import("./output-models").TextTextPluralOutputs>;
    programmingLanguageGeneration(args: TextTextProgrammingLanguageGenerationInputs): Promise<import("./output-models").TextTextProgrammingLanguageGenerationOutputs>;
    questionAnswering(args: TextTextQuestionAnsweringInputs): Promise<import("./output-models").TextTextQuestionAnsweringOutputs>;
    sentenceParaphraser(args: TextTextSentenceParaphraserInputs): Promise<import("./output-models").TextTextSentenceParaphraserOutputs>;
    sentimentAnalysis(args: TextTextSentimentAnalysisInputs): Promise<import("./output-models").TextTextSentimentAnalysisOutputs>;
    similarity(args: TextTextSimilarityInputs): Promise<import("./output-models").TextTextSimilarityOutputs>;
    wordAlignment(args: TextTextWordAlignmentInputs): Promise<import("./output-models").TextTextWordAlignmentOutputs>;
}
