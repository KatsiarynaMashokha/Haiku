import { Haiku } from './../js/scripts.js';

describe('Haiku', function() {

  it('should convert a sentence into an array of words', function() {
    let testHaiku = new Haiku('Hello people', 'car', 'dog');
    let sentenceArray = testHaiku.splitSentenceIntoWords('Hello people');
    expect(sentenceArray.length).toEqual(2);
  });

  it('should convert a word into an array of letters', function() {
    let testHaiku = new Haiku('Hello people', 'car', 'dog');
    let wordArray = testHaiku.splitWordIntoLettersArray('Hello');
    expect(wordArray.length).toEqual(5);
  });

  it('should count a number of vowels in a word', function() {
    let testHaiku = new Haiku('Hello people', 'car', 'dog');
    let numberVowels = testHaiku.countVowels("Hello");
    expect(numberVowels).toEqual(2);
  });

  it('should count a number of consonants in a word', function() {
    let testHaiku = new Haiku('Hello people', 'car', 'dog');
    let numberConsonants = testHaiku.countConsonants("Hello");
    expect(numberConsonants).toEqual(3);
  });

  it('should count length of word', function() {
    let testHaiku = new Haiku('Hello people', 'car', 'dog');
    let numLetters = testHaiku.countLetters("Hello");
    expect(numLetters).toEqual(5);
  });

  it('should detect silent e', function() {
    let testHaiku = new Haiku('People people', 'car', 'dog');
    let silent = testHaiku.silentEEnd("People");
    expect(silent).toEqual(1);
    });

    it('should detect if a letter is a vowel', function() {
      let testHaiku = new Haiku('People people', 'car', 'dog');
      //let silent = testHaiku.silentEEnd("People");
      expect(testHaiku.isVowel('a')).toBeTruthy();
    });

    it('should the number of silent vowels in  word', function() {
      let testHaiku = new Haiku('Haikua', 'car', 'dog');
      //let silent = testHaiku.silentEEnd("People");
      expect(testHaiku.silentVowelPresent('Haikualua')).toEqual(3);
    });

    it('should split the words of a sentence into an array of letters', function() {
      let testHaiku = new Haiku('Hai car', 'car', 'dog');
      let finalArrray = [['H', 'a', 'i'], ['c', 'a', 'r']];
      let splitSent = testHaiku.splitSentence('Hai car');
      expect(testHaiku.splitSentence('Hai car')).toEqual(finalArrray);
    });

    it('should return the number of syllables', function() {
      let testHaiku = new Haiku('Hai car', 'car', 'dog');
      let numSyl = testHaiku.getNumberOfSyllables('Hai car');
      let test2 = testHaiku.getNumberOfSyllables('make');

      console.log("syl num is: "+ numSyl);
      expect(numSyl).toEqual(2);
      expect(test2).toEqual(1);
    });

});
