/* eslint-disable import/prefer-default-export */
const checkValidation = dataList => {
  /**
   * Check dataList for validation
   * return Array( Object(data<string>: isValid<boolean>) )
   */
  if (!dataList || !dataList.length) return null;

  const dataValid = dataList.map(data => {
    const dataName = Object.keys(data)[0];
    const dataValue = Object.values(data)[0];

    return {
      name: dataName,
      isValid:
        dataValue !== undefined && dataValue !== null && dataValue !== '',
    };
  });

  return dataValid;
};

export { checkValidation };
