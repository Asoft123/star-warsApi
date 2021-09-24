const utility = require("../utils");

// Sorts movies character based on user passed parameters

exports.sortCharacters = async function (characterData, sortBy, order) {
  try {
    return await characterData.sort(utility.compareValues(sortBy, order));
  } catch (e) {
    return Promise.reject(e);
  }
};

// Filters Movie characters by gender

exports.filterCharacterByGender = async (characterData, filterBy) => {
  try {
    return await characterData.filter((characterDatum) => {
      return characterDatum.gender === filterBy.toLowerCase();
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

// Gets total Hieght and character count for movie character

exports.getTotalHeightAndCharacterCount = async (characterData) => {
  try {
    const totalHeightInCm = characterData.reduce((total, currentData) => {
      return +currentData.height + total;
    }, 0);

    const characterCount = characterData.length;
    const { feetInt, inches } =
      utility.centiMeterToFeetAndInches(totalHeightInCm);
    const totalHeightInFeetAndInches = `${feetInt}ft and ${inches}inches`;

    const heightData = {
      characterCount: characterCount,
      totalHeightInCm: totalHeightInCm,
      totalHeightInFeetAndInches: totalHeightInFeetAndInches,
    };
    characterData.push(heightData);

    return characterData;
  } catch (e) {
    return Promise.reject(e);
  }
};
