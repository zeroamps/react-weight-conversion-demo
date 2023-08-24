export type Units = 'pounds' | 'grams' | 'kilograms' | 'ounces';

export type Result = {
  pounds: number;
  grams: number;
  kilograms: number;
  ounces: number;
};

export function convert(value: number, unit: Units) {
  switch (unit) {
    case 'pounds': {
      return {
        pounds: value,
        grams: convertPoundsToGrams(value),
        kilograms: convertPoundsToKilograms(value),
        ounces: convertPoundsToOunces(value)
      };
    }
    case 'grams': {
      return {
        pounds: convertGramsToPounds(value),
        grams: value,
        kilograms: convertGramsToKilograms(value),
        ounces: convertGramsToOunces(value)
      };
    }
    case 'kilograms': {
      return {
        pounds: convertKilogramsToPounds(value),
        grams: convertKilogramsToGrams(value),
        kilograms: value,
        ounces: convertKilogramsToOunces(value)
      };
    }
    case 'ounces': {
      return {
        pounds: convertOuncesToPounds(value),
        grams: convertOuncesToGrams(value),
        kilograms: convertOuncesToKilograms(value),
        ounces: value
      };
    }
  }
}

function convertPoundsToGrams(value: number) {
  return value * 453.6;
}

function convertPoundsToKilograms(value: number) {
  return value / 2.205;
}

function convertPoundsToOunces(value: number) {
  return value * 16;
}

function convertGramsToPounds(value: number) {
  return value / 453.6;
}

function convertGramsToKilograms(value: number) {
  return value / 1000;
}

function convertGramsToOunces(value: number) {
  return value / 28.35;
}

function convertKilogramsToPounds(value: number) {
  return value * 2.205;
}

function convertKilogramsToGrams(value: number) {
  return value * 1000;
}

function convertKilogramsToOunces(value: number) {
  return value * 35.274;
}

function convertOuncesToPounds(value: number) {
  return value / 16;
}

function convertOuncesToGrams(value: number) {
  return value * 28.35;
}

function convertOuncesToKilograms(value: number) {
  return value / 35.274;
}
