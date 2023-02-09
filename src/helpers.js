/* eslint-disable import/prefer-default-export */
const checkValidation = dataList => {
  /**
   * Check dataList for validation
   * return Boolean
   * add [code] down here
   */
  if (!dataList || !dataList.length) return null;

  const boolList = dataList.map(
    dataValue =>
      dataValue !== undefined && dataValue !== null && dataValue !== ''
  );

  return !boolList.includes(false);
};

export { checkValidation };
