import { TextTextAutocorrectInputs, TextTextEmotionRecognitionInputs, TextTextHateSpeechDetectionInputs, TextTextKeywordExtractionInputs, TextTextLanguageDetectionInputs, TextTextLanguageGenerationInputs, TextTextNamedEntityRecognitionInputs, TextTextNextSentencePredictionInputs, TextTextNextWordPredictionInputs, TextTextPluralInputs, TextTextProgrammingLanguageGenerationInputs, TextTextQuestionAnsweringInputs, TextTextSentenceParaphraserInputs, TextTextSentimentAnalysisInputs, TextTextSimilarityInputs, TextTextTranslationInputs, TextTextWordAlignmentInputs, TextTextArticleGenerationInputs, TextTextAdGenerationInputs, TextTextSummarizationInputs, TextTextIntentClassificationInputs } from './input-models';
import { TextTextAutocorrectOutputs, TextTextEmotionRecognitionOutputs, TextTextHateSpeechDetectionOutputs, TextTextKeywordExtractionOutputs, TextTextLanguageDetectionOutputs, TextTextLanguageGenerationOutputs, TextTextNamedEntityRecognitionOutputs, TextTextNextSentencePredictionOutputs, TextTextNextWordPredictionOutputs, TextTextPluralOutputs, TextTextProgrammingLanguageGenerationOutputs, TextTextQuestionAnsweringOutputs, TextTextSentenceParaphraserOutputs, TextTextSentimentAnalysisOutputs, TextTextSimilarityOutputs, TextTextTranslationOutputs, TextTextWordAlignmentOutputs, TextTextArticleGenerationOutputs, TextTextAdGenerationOutputs, TextTextSummarizationOutputs, TextTextIntentClassificationOutputs } from './output-models';
import { GladiaClientParams } from './gladia-client-params';
export declare class FromTextToText {
    private params;
    private httpClient;
    constructor(params: GladiaClientParams);
    autocorrect(args: TextTextAutocorrectInputs): Promise<TextTextAutocorrectOutputs>;
    emotionRecognition(args: TextTextEmotionRecognitionInputs): Promise<TextTextEmotionRecognitionOutputs>;
    hateSpeechDetection(args: TextTextHateSpeechDetectionInputs): Promise<TextTextHateSpeechDetectionOutputs>;
    keywordExtraction(args: TextTextKeywordExtractionInputs): Promise<TextTextKeywordExtractionOutputs>;
    languageDetection(args: TextTextLanguageDetectionInputs): Promise<TextTextLanguageDetectionOutputs>;
    languageGeneration(args: TextTextLanguageGenerationInputs): Promise<TextTextLanguageGenerationOutputs>;
    namedEntityRecognition(args: TextTextNamedEntityRecognitionInputs): Promise<TextTextNamedEntityRecognitionOutputs>;
    nextSentencePrediction(args: TextTextNextSentencePredictionInputs): Promise<TextTextNextSentencePredictionOutputs>;
    nextWordPrediction(args: TextTextNextWordPredictionInputs): Promise<TextTextNextWordPredictionOutputs>;
    plural(args: TextTextPluralInputs): Promise<TextTextPluralOutputs>;
    programmingLanguageGeneration(args: TextTextProgrammingLanguageGenerationInputs): Promise<TextTextProgrammingLanguageGenerationOutputs>;
    questionAnswering(args: TextTextQuestionAnsweringInputs): Promise<TextTextQuestionAnsweringOutputs>;
    sentenceParaphraser(args: TextTextSentenceParaphraserInputs): Promise<TextTextSentenceParaphraserOutputs>;
    sentimentAnalysis(args: TextTextSentimentAnalysisInputs): Promise<TextTextSentimentAnalysisOutputs>;
    similarity(args: TextTextSimilarityInputs): Promise<TextTextSimilarityOutputs>;
    translation(args: TextTextTranslationInputs): Promise<TextTextTranslationOutputs>;
    wordAlignment(args: TextTextWordAlignmentInputs): Promise<TextTextWordAlignmentOutputs>;
    articleGeneration(args: TextTextArticleGenerationInputs): Promise<TextTextArticleGenerationOutputs>;
    adGeneration(args: TextTextAdGenerationInputs): Promise<TextTextAdGenerationOutputs>;
    summarization(args: TextTextSummarizationInputs): Promise<TextTextSummarizationOutputs>;
    intentClassification(args: TextTextIntentClassificationInputs): Promise<TextTextIntentClassificationOutputs>;
}
