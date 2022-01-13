import { days } from "../config";
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getDayInfo () {
  const day = new Date().getDay();
  const dayName = days[day];
  return {
    dayNum: day,
    dayName,
  };
};

export function getDayText(dayNum = 0) {
  switch (dayNum) {
    case 0:
    case 6: {
      return [
        "Successful",
        "Surreal",
        "Super",
        "Superlative",
        "Special",
        "Stunning",
        "Stupendous",
        "Sensational",
        "Serendipitous",
        "Sparkling",
        "Splendid",
        "Swanky",
        "Spectacular",
      ];
    }
    case 2:
    case 4: {
      return [
        "Terrific",
        "Tremendous",
        "Thrilling",
        "Tantalizing",
        "Trailblazing",
        "Thrifty",
      ];
    }
    case 1:
      return [
        "Meaningful",
        "Memorable",
        "Mesmerizing",
        "Magnificient",
        "Meteoric",
        "Marvelous",
        "Mighty",
        "Magical",
        "Masterful",
        "Mystic",
      ];
    case 3:
      return ["Wonderful", "Wholesome", "Warm", "Whimsical", "Wondrous"];
    case 5:
      return [
        "Fantastic",
        "Favourable",
        "Fascinating",
        "Fantabulous",
        "Fun",
        "Fresh",
        "Faultless",
        "Fearless",
        "Ferocious",
        "Focused",
        "Fabulous",
      ];
  }
}
