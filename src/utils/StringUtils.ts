/* 
 * @remarks
 * This method receives a string, and returns a new string
 * with the long words truncated on smaller chunks.
 * To avoid long words overlaping its parent container.
 *
 * @param string - String to be separated and trucated.
 *
 * @returns string without long words.
 *
 */
export const truncateLongWords = (string: string) => {
  const separatedWords = string.split(' ')

  let newSeparatedWord = separatedWords.map((word) => {
    if (word.length > 100) {
      let truncatedWord = word.match(/.{1,20}/g)
      return truncatedWord?.join(' ')
    } else {
      return word
    }
  })

  return newSeparatedWord.join(' ')
}