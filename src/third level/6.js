export const replaceWord = (str, word, replaced) =>
  str
    .split(' ')
    .map(e => (e === word ? replaced : e))
    .join(' ')
