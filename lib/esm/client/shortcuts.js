/* Generated file with "scripts/generate-sdk.ts" */
export class Shortcuts {
    // AUDIO => TEXT
    audioTranscription(args) {
        return this.fromAudio().toText().audioTranscription(args);
    }
    speakerDiarization(args) {
        return this.fromAudio().toText().speakerDiarization(args);
    }
    speakerGenderClassification(args) {
        return this.fromAudio().toText().speakerGenderClassification(args);
    }
    // IMAGE => IMAGE
    backgroundRemoval(args) {
        return this.fromImage().toImage().backgroundRemoval(args);
    }
    backgroundReplacement(args) {
        return this.fromImage().toImage().backgroundReplacement(args);
    }
    colorization(args) {
        return this.fromImage().toImage().colorization(args);
    }
    deblurring(args) {
        return this.fromImage().toImage().deblurring(args);
    }
    enhancement(args) {
        return this.fromImage().toImage().enhancement(args);
    }
    faceBluring(args) {
        return this.fromImage().toImage().faceBluring(args);
    }
    guidedInpainting(args) {
        return this.fromImage().toImage().guidedInpainting(args);
    }
    imageGuidedInpainting(args) {
        return this.fromImage().toImage().imageGuidedInpainting(args);
    }
    inpainting(args) {
        return this.fromImage().toImage().inpainting(args);
    }
    uncolorization(args) {
        return this.fromImage().toImage().uncolorization(args);
    }
    // IMAGE => TEXT
    classification(args) {
        return this.fromImage().toText().classification(args);
    }
    ocr(args) {
        return this.fromImage().toText().ocr(args);
    }
    imageGeneration(args) {
        return this.fromText().toImage().imageGeneration(args);
    }
    // TEXT => TEXT
    addressFormatting(args) {
        return this.fromText().toText().addressFormatting(args);
    }
    ageFromName(args) {
        return this.fromText().toText().ageFromName(args);
    }
    anonymization(args) {
        return this.fromText().toText().anonymization(args);
    }
    autocorrect(args) {
        return this.fromText().toText().autocorrect(args);
    }
    bulletPointGeneration(args) {
        return this.fromText().toText().bulletPointGeneration(args);
    }
    commandGeneration(args) {
        return this.fromText().toText().commandGeneration(args);
    }
    companyCategorization(args) {
        return this.fromText().toText().companyCategorization(args);
    }
    companyNameNormalization(args) {
        return this.fromText().toText().companyNameNormalization(args);
    }
    companyStockCode(args) {
        return this.fromText().toText().companyStockCode(args);
    }
    conversationSummarization(args) {
        return this.fromText().toText().conversationSummarization(args);
    }
    countryFromName(args) {
        return this.fromText().toText().countryFromName(args);
    }
    dateCleaning(args) {
        return this.fromText().toText().dateCleaning(args);
    }
    emotionRecognition(args) {
        return this.fromText().toText().emotionRecognition(args);
    }
    genderFromName(args) {
        return this.fromText().toText().genderFromName(args);
    }
    gpsAddressFormatting(args) {
        return this.fromText().toText().gpsAddressFormatting(args);
    }
    gpt3(args) {
        return this.fromText().toText().gpt3(args);
    }
    guessCity(args) {
        return this.fromText().toText().guessCity(args);
    }
    guessCountry(args) {
        return this.fromText().toText().guessCountry(args);
    }
    guessIntent(args) {
        return this.fromText().toText().guessIntent(args);
    }
    hateSpeechDetection(args) {
        return this.fromText().toText().hateSpeechDetection(args);
    }
    headlineGeneration(args) {
        return this.fromText().toText().headlineGeneration(args);
    }
    keywordExtraction(args) {
        return this.fromText().toText().keywordExtraction(args);
    }
    languageCodes(args) {
        return this.fromText().toText().languageCodes(args);
    }
    languageDetection(args) {
        return this.fromText().toText().languageDetection(args);
    }
    languageGeneration(args) {
        return this.fromText().toText().languageGeneration(args);
    }
    namedEntityRecognition(args) {
        return this.fromText().toText().namedEntityRecognition(args);
    }
    nextSentencePrediction(args) {
        return this.fromText().toText().nextSentencePrediction(args);
    }
    nextWordPrediction(args) {
        return this.fromText().toText().nextWordPrediction(args);
    }
    productOwnership(args) {
        return this.fromText().toText().productOwnership(args);
    }
    productSentiment(args) {
        return this.fromText().toText().productSentiment(args);
    }
    programmingLanguageGeneration(args) {
        return this.fromText().toText().programmingLanguageGeneration(args);
    }
    punctuationRestoration(args) {
        return this.fromText().toText().punctuationRestoration(args);
    }
    questionAnswering(args) {
        return this.fromText().toText().questionAnswering(args);
    }
    sentenceParaphraser(args) {
        return this.fromText().toText().sentenceParaphraser(args);
    }
    sentimentAnalysis(args) {
        return this.fromText().toText().sentimentAnalysis(args);
    }
    similarity(args) {
        return this.fromText().toText().similarity(args);
    }
    speakerRecognition(args) {
        return this.fromText().toText().speakerRecognition(args);
    }
    summarization(args) {
        return this.fromText().toText().summarization(args);
    }
    translation(args) {
        return this.fromText().toText().translation(args);
    }
    vatCountryGuessing(args) {
        return this.fromText().toText().vatCountryGuessing(args);
    }
    websiteClassification(args) {
        return this.fromText().toText().websiteClassification(args);
    }
    wordAlignment(args) {
        return this.fromText().toText().wordAlignment(args);
    }
    // VIDEO => TEXT
    actionClassifications(args) {
        return this.fromVideo().toText().actionClassifications(args);
    }
}
