const checkObjectKeysInArray = (object,array) => {
  const objectKeys = Object.keys(object);
  return objectKeys.every((key) => array.includes(key));
};

module.exports = { checkObjectKeysInArray };
