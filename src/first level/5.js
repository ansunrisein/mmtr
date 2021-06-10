export const capitalize = str =>
  str
    .split(' ')
    .map(s => s.toLowerCase().replace(/^./, match => match.toUpperCase()))
    .join(' ')
