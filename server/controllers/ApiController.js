var CampusesModel = require('../models/CampusesModel');
var LaborsModel = require('../models/LaborsModel');
var ProjectsModel = require('../models/ProjectsModel');

const initResult = result => {
  if (!result) {
    return {
      result: false,
      status_code: '500',
      status_message: 'Error invalid'
    };
  }
  return {
    result: true,
    status_code: '200',
    status_message: 'Success'
  };
};

exports.initResult = initResult;
exports.createCampus = (req, res) => {
  // console.log("body",req.body)
  CampusesModel.createCampus(req.body, (err, doc, row) => {
    console.log(err, doc, row);
    if (err) {
      let result = initResult(false);
      result['status_message'] = err.message;
      res.send(result);
    } else {
      let result = initResult(true);
      res.send(result);
    }
  });
};

exports.createLabor = (req, res) => {
  const params = { ...req.body };
  LaborsModel.createLabor(params, (err, doc, row) => {
    console.log(err, doc, row);
    if (err) {
      let result = initResult(false);
      result['status_message'] = err.message;
      res.send(result);
    } else {
      let result = initResult(true);
      res.send(result);
    }
  });
};

exports.createProject = (req, res) => {
  const params = { ...req.body };
  ProjectsModel.createProject(params, (err, doc, row) => {
    console.log(err, doc, row);
    if (err) {
      let result = initResult(false);
      result['status_message'] = err.message;
      res.send(result);
    } else {
      let result = initResult(true);
      res.send(result);
    }
  });
};

exports.createAll = (req, res) => {
  const params = { ...req.body };
  CampusesModel.createCampus(params.campus, (err, doc, row) => {
    console.log('doc', doc);
    if (err) {
      let result = initResult(false);
      result['status_message'] = err.message;
      res.send(result);
    } else {
      let campus_id = doc._id;
      let labors = params.labors;
      labors[0].campus_id = campus_id;
      console.log('labors' + labors[0]);
      LaborsModel.createLabor(labors[0], (err, doc, row) => {
        if (err) {
          let result = initResult(false);
          result['status_message'] = err.message;
          res.send(result);
        } else {
          let campus_id = doc._id;
          let project = params.project;
          project.campus_id = campus_id;
          ProjectsModel.createProject(project, (err, doc, row) => {
            console.log(err, doc, row);
            if (err) {
              let result = initResult(false);
              result['status_message'] = err.message;
              res.send(result);
            } else {
              let result = initResult(true);
              res.send(result);
            }
          });
        }
      });
    }
  });
};

exports.getProjects = (req, res) => {
  ProjectsModel.getProjects()
    .then(data => {
      let response = initResult(data);
      response['data'] = data;
      res.send(response);
    })
    .catch(err => {
      let response = initResult(err);
      response.status_message = err.message;
      res.send(response);
    });
};

exports.getLabors = (req, res) => {
  LaborsModel.getLabors()
    .then(data => {
      let response = initResult(data);
      response['data'] = data;
      res.send(response);
    })
    .catch(err => {
      let response = initResult(err);
      response.status_message = err.message;
      res.send(response);
    });
};

exports.getCampuses = (req, res) => {
  CampusesModel.getCampuses()
    .then(data => {
      let response = initResult(data);
      response['data'] = data;
      res.send(response);
    })
    .catch(err => {
      let response = initResult(err);
      response.status_message = err.message;
      res.send(response);
    });
};
