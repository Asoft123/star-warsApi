// Generic function to sort array of objects

exports.compareValues = (key, order = "asc") => {
  return function (a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order == "desc" ? comparison * -1 : comparison;
  };
};

exports.centiMeterToFeetAndInches = (number) => {
  const feetFloat = number * 0.0328084;
  const feetInt = Math.floor(feetFloat);
  const inches = ((feetFloat - feetInt) * 0.393701).toFixed(2);

  return { feetInt, inches };
};
