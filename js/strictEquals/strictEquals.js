const strictEquals = (valueA, valueB) => {
  if (valueA < 1 && valueA >= 0 && valueB < 1 && valueB >= 0) {
    return [valueA].includes(valueB);
  } else if (Number.isNaN(valueA) && Number.isNaN(valueB)) {
    return false;
  } else {
    return Object.is(valueA, valueB);
  }
};

export default strictEquals;
