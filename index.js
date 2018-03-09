'use strict'

const _ = require('lodash')

const data = require('./data')

/**
 * Iterate through sentence words to look for palindrome words
 *
 * @param {string} sentence - the sentence to iterate through
 * @returns {Array.<string>} - a list of palindrome words find in the given sentence
 */
const checkForPalindromeWord = (sentence) => {
    const sentenceWords = sentence.split(' ')
    const palindromeWordsList = []


    sentenceWords.forEach(word => {
        // used to remove single letters, since they can't be defined as a palindrome (or do they?)
        if (word.length < 3) {
            return
        }

        const lowerCasedWord = word.toLowerCase()

        const reversedWord = lowerCasedWord.split('').reverse().join('')

        if (reversedWord === lowerCasedWord) {
            palindromeWordsList.push(word)
        }
    })

    return palindromeWordsList
}

/**
 * Check if a text is a palindrome
 * i.e: A nut for a jar of tuna.
 *
 * @param {string} sentence - the sentence to check
 * @returns {boolean}
 */
const isSentencePalindrome = (sentence) => {
    const lowerCasedSentence = sentence.toLowerCase()

    const words = _.words(lowerCasedSentence).join('')

    // here we need to join the words to have a unique string of all sentence characters
    // and then split it in order to reverse it before joining each character again
    const reversedWords = _.words(lowerCasedSentence).join('').split('').reverse().join('')

    return words === reversedWords
}

/**
 * Check if the sentence meaning is a palindrome
 * i.e: King, are you glad you are king?
 *
 * @param {string} sentence - the sentence to check
 * @returns {boolean}
 */
const isSentenceMeaningPalindrome = (sentence) => {
    const lowerCasedSentence = sentence.toLowerCase()

    const words = _.words(lowerCasedSentence).join('')
    const reversedWords = _.words(lowerCasedSentence).reverse().join('')

    return words === reversedWords
}

/**
 * Displaying the results
 */
data.testStrings.forEach(sentence => {
    console.log(sentence,
        '\n',
        {
            palindromeWords:           checkForPalindromeWord(sentence),
            wholeTextPalindrome:       isSentencePalindrome(sentence),
            sentenceMeaningPalindrome: isSentenceMeaningPalindrome(sentence)
        },
        '\n')
})