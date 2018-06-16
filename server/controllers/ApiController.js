var CampusesModel = require('../models/CampusesModel');

const initResult = (result) => {
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

exports.initResult = initResult;
exports.createCampus = (req, res) => {
  // console.log("body",req.body)
  CampusesModel.createCampus(req.body, (err, doc, row) => {
    console.log(err);
    if (err) {
      let result = initResult(false);
      result['status_message'] = err.message;
      res.send(result);
    } else {
      let result = initResult(true);
      res.send(result);
    }
  })
};