export const lowerCase = (word: string) => word.toLocaleLowerCase();

export const capitalize = (word: string) =>
  `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;

export const titleCase = (words: string) =>
  words.split(" ").map(capitalize).join(" ");

export const slugify = (words: string) =>
  words.split(" ").map(lowerCase).join("-");

export const splitOnCap = (str: string) => str.split(/(?=[A-Z])/).join(' ');
