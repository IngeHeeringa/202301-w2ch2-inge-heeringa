const strictEquals = (valueA, valueB) => {
  if (Number.isNaN(valueA) && Number.isNaN(valueB)) {
    return false;
  } else {
    return [valueA].includes(valueB);
  }
};

export default strictEquals;
