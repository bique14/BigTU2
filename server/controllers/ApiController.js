exports.initResult = (result) => {
  if (!result) {
    return {
      result: false,
      status_code: '500',
      status_message: 'Error invalid'
    }
  }
  return {
    result: true,
    status_code: '200',
    status_message: 'Success',
  }
};