/* Generated file with "scripts/generate-sdk.ts" */

import {
  TextTextAutocorrectInputs,
  TextTextEmotionRecognitionInputs,
  TextTextHateSpeechDetectionInputs,
  TextTextKeywordExtractionInputs,
  TextTextLanguageDetectionInputs,
  TextTextLanguageGenerationInputs,
  TextTextNamedEntityRecognitionInputs,
  TextTextNextSentencePredictionInputs,
  TextTextNextWordPredictionInputs,
  TextTextPluralInputs,
  TextTextProgrammingLanguageGenerationInputs,
  TextTextQuestionAnsweringInputs,
  TextTextSentenceParaphraserInputs,
  TextTextSentimentAnalysisInputs,
  TextTextSimilarityInputs,
  TextTextWordAlignmentInputs,
} from './input-models'
import {
  TextTextAutocorrectOutputs,
  TextTextEmotionRecognitionOutputs,
  TextTextHateSpeechDetectionOutputs,
  TextTextKeywordExtractionOutputs,
  TextTextLanguageDetectionOutputs,
  TextTextLanguageGenerationOutputs,
  TextTextNamedEntityRecognitionOutputs,
  TextTextNextSentencePredictionOutputs,
  TextTextNextWordPredictionOutputs,
  TextTextPluralOutputs,
  TextTextProgrammingLanguageGenerationOutputs,
  TextTextQuestionAnsweringOutputs,
  TextTextSentenceParaphraserOutputs,
  TextTextSentimentAnalysisOutputs,
  TextTextSimilarityOutputs,
  TextTextWordAlignmentOutputs,
} from './output-models'
import {
  TEXT_TEXT_AUTOCORRECT_CONTENT_TYPE,
  TEXT_TEXT_AUTOCORRECT_DEFAULT_MODEL,
  TEXT_TEXT_EMOTION_RECOGNITION_CONTENT_TYPE,
  TEXT_TEXT_EMOTION_RECOGNITION_DEFAULT_MODEL,
  TEXT_TEXT_HATE_SPEECH_DETECTION_CONTENT_TYPE,
  TEXT_TEXT_HATE_SPEECH_DETECTION_DEFAULT_MODEL,
  TEXT_TEXT_KEYWORD_EXTRACTION_CONTENT_TYPE,
  TEXT_TEXT_KEYWORD_EXTRACTION_DEFAULT_MODEL,
  TEXT_TEXT_LANGUAGE_DETECTION_CONTENT_TYPE,
  TEXT_TEXT_LANGUAGE_DETECTION_DEFAULT_MODEL,
  TEXT_TEXT_LANGUAGE_GENERATION_CONTENT_TYPE,
  TEXT_TEXT_LANGUAGE_GENERATION_DEFAULT_MODEL,
  TEXT_TEXT_NAMED_ENTITY_RECOGNITION_CONTENT_TYPE,
  TEXT_TEXT_NAMED_ENTITY_RECOGNITION_DEFAULT_MODEL,
  TEXT_TEXT_NEXT_SENTENCE_PREDICTION_CONTENT_TYPE,
  TEXT_TEXT_NEXT_SENTENCE_PREDICTION_DEFAULT_MODEL,
  TEXT_TEXT_NEXT_WORD_PREDICTION_CONTENT_TYPE,
  TEXT_TEXT_NEXT_WORD_PREDICTION_DEFAULT_MODEL,
  TEXT_TEXT_PLURAL_CONTENT_TYPE,
  TEXT_TEXT_PLURAL_DEFAULT_MODEL,
  TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_CONTENT_TYPE,
  TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_DEFAULT_MODEL,
  TEXT_TEXT_QUESTION_ANSWERING_CONTENT_TYPE,
  TEXT_TEXT_QUESTION_ANSWERING_DEFAULT_MODEL,
  TEXT_TEXT_SENTENCE_PARAPHRASER_CONTENT_TYPE,
  TEXT_TEXT_SENTENCE_PARAPHRASER_DEFAULT_MODEL,
  TEXT_TEXT_SENTIMENT_ANALYSIS_CONTENT_TYPE,
  TEXT_TEXT_SENTIMENT_ANALYSIS_DEFAULT_MODEL,
  TEXT_TEXT_SIMILARITY_CONTENT_TYPE,
  TEXT_TEXT_SIMILARITY_DEFAULT_MODEL,
  TEXT_TEXT_WORD_ALIGNMENT_CONTENT_TYPE,
  TEXT_TEXT_WORD_ALIGNMENT_DEFAULT_MODEL,
} from '../models'
import { getHttpClient, HttpClient } from '../internal/http-client';
import { isDefined } from '../utils/fp';
import { UrlFormData } from '../internal/url-form-data';
import { GladiaClientParams } from './gladia-client-params';

export class FromTextToText {
  private httpClient: HttpClient;

  constructor(private params: GladiaClientParams) {
    this.httpClient = getHttpClient(this.params);
  }

  autocorrect(args: TextTextAutocorrectInputs): Promise<TextTextAutocorrectOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.sentence)) {
      formData.append('sentence', args.sentence);
    }
    return this.httpClient.post({
      url: '/text/text/autocorrect/',
      headers: { 'Content-Type': TEXT_TEXT_AUTOCORRECT_CONTENT_TYPE },
      query: {
        model: args.model ?? TEXT_TEXT_AUTOCORRECT_DEFAULT_MODEL,
      },
      body: formData.toString(),
    });
  }

  emotionRecognition(args: TextTextEmotionRecognitionInputs): Promise<TextTextEmotionRecognitionOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.text)) {
      formData.append('text', args.text);
    }
    return this.httpClient.post({
      url: '/text/text/emotion-recognition/',
      headers: { 'Content-Type': TEXT_TEXT_EMOTION_RECOGNITION_CONTENT_TYPE },
      query: {
        model: args.model ?? TEXT_TEXT_EMOTION_RECOGNITION_DEFAULT_MODEL,
      },
      body: formData.toString(),
    });
  }

  hateSpeechDetection(args: TextTextHateSpeechDetectionInputs): Promise<TextTextHateSpeechDetectionOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.text)) {
      formData.append('text', args.text);
    }
    return this.httpClient.post({
      url: '/text/text/hate-speech-detection/',
      headers: { 'Content-Type': TEXT_TEXT_HATE_SPEECH_DETECTION_CONTENT_TYPE },
      query: {
        model: args.model ?? TEXT_TEXT_HATE_SPEECH_DETECTION_DEFAULT_MODEL,
      },
      body: formData.toString(),
    });
  }

  keywordExtraction(args: TextTextKeywordExtractionInputs): Promise<TextTextKeywordExtractionOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.text)) {
      formData.append('text', args.text);
    }
    return this.httpClient.post({
      url: '/text/text/keyword-extraction/',
      headers: { 'Content-Type': TEXT_TEXT_KEYWORD_EXTRACTION_CONTENT_TYPE },
      query: {
        model: args.model ?? TEXT_TEXT_KEYWORD_EXTRACTION_DEFAULT_MODEL,
      },
      body: formData.toString(),
    });
  }

  languageDetection(args: TextTextLanguageDetectionInputs): Promise<TextTextLanguageDetectionOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.text)) {
      formData.append('text', args.text);
    }
    return this.httpClient.post({
      url: '/text/text/language-detection/',
      headers: { 'Content-Type': TEXT_TEXT_LANGUAGE_DETECTION_CONTENT_TYPE },
      query: {
        model: args.model ?? TEXT_TEXT_LANGUAGE_DETECTION_DEFAULT_MODEL,
      },
      body: formData.toString(),
    });
  }

  languageGeneration(args: TextTextLanguageGenerationInputs): Promise<TextTextLanguageGenerationOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.text)) {
      formData.append('text', args.text);
    }
    return this.httpClient.post({
      url: '/text/text/language-generation/',
      headers: { 'Content-Type': TEXT_TEXT_LANGUAGE_GENERATION_CONTENT_TYPE },
      query: {
        model: args.model ?? TEXT_TEXT_LANGUAGE_GENERATION_DEFAULT_MODEL,
      },
      body: formData.toString(),
    });
  }

  namedEntityRecognition(args: TextTextNamedEntityRecognitionInputs): Promise<TextTextNamedEntityRecognitionOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.text)) {
      formData.append('text', args.text);
    }
    return this.httpClient.post({
      url: '/text/text/named-entity-recognition/',
      headers: { 'Content-Type': TEXT_TEXT_NAMED_ENTITY_RECOGNITION_CONTENT_TYPE },
      query: {
        model: args.model ?? TEXT_TEXT_NAMED_ENTITY_RECOGNITION_DEFAULT_MODEL,
      },
      body: formData.toString(),
    });
  }

  nextSentencePrediction(args: TextTextNextSentencePredictionInputs): Promise<TextTextNextSentencePredictionOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.sentence_1)) {
      formData.append('sentence_1', args.sentence_1);
    }
    if (isDefined(args.sentence_2)) {
      formData.append('sentence_2', args.sentence_2);
    }
    return this.httpClient.post({
      url: '/text/text/next-sentence-prediction/',
      headers: { 'Content-Type': TEXT_TEXT_NEXT_SENTENCE_PREDICTION_CONTENT_TYPE },
      query: {
        model: args.model ?? TEXT_TEXT_NEXT_SENTENCE_PREDICTION_DEFAULT_MODEL,
      },
      body: formData.toString(),
    });
  }

  nextWordPrediction(args: TextTextNextWordPredictionInputs): Promise<TextTextNextWordPredictionOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.sentence)) {
      formData.append('sentence', args.sentence);
    }
    return this.httpClient.post({
      url: '/text/text/next-word-prediction/',
      headers: { 'Content-Type': TEXT_TEXT_NEXT_WORD_PREDICTION_CONTENT_TYPE },
      query: {
        model: args.model ?? TEXT_TEXT_NEXT_WORD_PREDICTION_DEFAULT_MODEL,
      },
      body: formData.toString(),
    });
  }

  plural(args: TextTextPluralInputs): Promise<TextTextPluralOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.word)) {
      formData.append('word', args.word);
    }
    if (isDefined(args.count)) {
      formData.append('count', String(args.count));
    }
    return this.httpClient.post({
      url: '/text/text/plural/',
      headers: { 'Content-Type': TEXT_TEXT_PLURAL_CONTENT_TYPE },
      query: {
        model: args.model ?? TEXT_TEXT_PLURAL_DEFAULT_MODEL,
      },
      body: formData.toString(),
    });
  }

  programmingLanguageGeneration(args: TextTextProgrammingLanguageGenerationInputs): Promise<TextTextProgrammingLanguageGenerationOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.code_snippet)) {
      formData.append('code_snippet', args.code_snippet);
    }
    return this.httpClient.post({
      url: '/text/text/programming-language-generation/',
      headers: { 'Content-Type': TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_CONTENT_TYPE },
      query: {
        model: args.model ?? TEXT_TEXT_PROGRAMMING_LANGUAGE_GENERATION_DEFAULT_MODEL,
      },
      body: formData.toString(),
    });
  }

  questionAnswering(args: TextTextQuestionAnsweringInputs): Promise<TextTextQuestionAnsweringOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.context)) {
      formData.append('context', args.context);
    }
    if (isDefined(args.question)) {
      formData.append('question', args.question);
    }
    return this.httpClient.post({
      url: '/text/text/question-answering/',
      headers: { 'Content-Type': TEXT_TEXT_QUESTION_ANSWERING_CONTENT_TYPE },
      query: {
        model: args.model ?? TEXT_TEXT_QUESTION_ANSWERING_DEFAULT_MODEL,
      },
      body: formData.toString(),
    });
  }

  sentenceParaphraser(args: TextTextSentenceParaphraserInputs): Promise<TextTextSentenceParaphraserOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.context)) {
      formData.append('context', args.context);
    }
    return this.httpClient.post({
      url: '/text/text/sentence-paraphraser/',
      headers: { 'Content-Type': TEXT_TEXT_SENTENCE_PARAPHRASER_CONTENT_TYPE },
      query: {
        model: args.model ?? TEXT_TEXT_SENTENCE_PARAPHRASER_DEFAULT_MODEL,
      },
      body: formData.toString(),
    });
  }

  sentimentAnalysis(args: TextTextSentimentAnalysisInputs): Promise<TextTextSentimentAnalysisOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.text)) {
      formData.append('text', args.text);
    }
    return this.httpClient.post({
      url: '/text/text/sentiment-analysis/',
      headers: { 'Content-Type': TEXT_TEXT_SENTIMENT_ANALYSIS_CONTENT_TYPE },
      query: {
        model: args.model ?? TEXT_TEXT_SENTIMENT_ANALYSIS_DEFAULT_MODEL,
      },
      body: formData.toString(),
    });
  }

  similarity(args: TextTextSimilarityInputs): Promise<TextTextSimilarityOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.sentence_1)) {
      formData.append('sentence_1', args.sentence_1);
    }
    if (isDefined(args.sentence_2)) {
      formData.append('sentence_2', args.sentence_2);
    }
    return this.httpClient.post({
      url: '/text/text/similarity/',
      headers: { 'Content-Type': TEXT_TEXT_SIMILARITY_CONTENT_TYPE },
      query: {
        model: args.model ?? TEXT_TEXT_SIMILARITY_DEFAULT_MODEL,
      },
      body: formData.toString(),
    });
  }

  wordAlignment(args: TextTextWordAlignmentInputs): Promise<TextTextWordAlignmentOutputs> {
    const formData = new UrlFormData();
    if (isDefined(args.input_string_language_1)) {
      formData.append('input_string_language_1', args.input_string_language_1);
    }
    if (isDefined(args.input_string_language_2)) {
      formData.append('input_string_language_2', args.input_string_language_2);
    }
    return this.httpClient.post({
      url: '/text/text/word-alignment/',
      headers: { 'Content-Type': TEXT_TEXT_WORD_ALIGNMENT_CONTENT_TYPE },
      query: {
        model: args.model ?? TEXT_TEXT_WORD_ALIGNMENT_DEFAULT_MODEL,
      },
      body: formData.toString(),
    });
  }

}
