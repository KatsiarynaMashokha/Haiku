export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    let haikuArray = [line1, line2, line3];
  }

  splitSentenceIntoWords(word) {
    return word.split(" ");
  };

  splitWordIntoLettersArray(word) {
    return word.split('');
  }

  countVowels(word) {
    return word.match(/[aeiou]/gi).length;
  }

  countConsonants(word) {
    return word.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
  }

  countLetters(word) {
     return word.length;
  }

  silentEEnd(word){
    if (word[word.length - 1] === "e" && word[word.length - 2] === "l") {
      return 1;
    } else if (word[word.length - 1] === "e") {
      return -1;
    }
    else {
      return 0;
    }
  }

  isVowel(letter) {
    const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
    if (vowelsArray.indexOf(letter) >-1) {
      return true;
    } else {
      return false;
    }
  }

  silentVowelPresent(word) {
    var numberOfSilentVowels = 0;
    for (let i = 0; i < word.length - 1; i++) {
      if (this.isVowel(word[i]) && this.isVowel(word[i+1])) {
        numberOfSilentVowels++;
      }
    } return numberOfSilentVowels;
  }

  // twoMiddleConsonates(word) {
  //   var exceptionsArray = ["th", "sh", "ph", "th", "ch", "wh"];
  //   // const Consonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  //   let wordLength = this.countLetters(word);
  //   if (wordLength % 2 === 0) {
  //     let middleIndex = wordLength / 2;
  //     if(!this.isVowel(word[middleIndex - 1]) &&  !this.isVowel(word[middleIndex])) {
  //       let consWord = word[middleIndex - 1] + word[middleIndex]);
  //       if (exceptionsArray.indexOf(consWord) > -1) {
  //
  //       }
  //     }
  //   }
  //   this.countLetters().slice();
  // }

splitSentence(sentence) {
  var wordsArray = this.splitSentenceIntoWords(sentence);
  var finalArrray = [];
  for (var i = 0; i < wordsArray.length; i++) {
    var splitWord = this.splitWordIntoLettersArray(wordsArray[i]);
    finalArrray.push(splitWord);
  }
  return finalArrray;
}

getNumberOfSyllables(sentence) {
  var numOfSyl = 0;
  var wordsArray = this.splitSentenceIntoWords(sentence);
  for (var i = 0; i < wordsArray.length; i++) {
      numOfSyl += this.countVowels(wordsArray[i]);
      numOfSyl -= this.silentVowelPresent(wordsArray[i]);
    if (this.silentEEnd(wordsArray[i] > 0)) {
      numOfSyl += this.silentEEnd(wordsArray[i]);
    } else if(this.silentEEnd(wordsArray[i] === -1)) {
      numOfSyl += this.silentEEnd(wordsArray[i]);
    }
  } return numOfSyl;
}

};


//if length less than 2, 1 syllable
