const Complaint = require('../../models/app/complaintModel');

exports.getAllClosures = (req, res) => {
  Complaint.getAll(req.body,(err,results) => {
    if (err) return res.status(500).json({ error: err });
    if (!req.body) return res.status(400).json({statusMsg: "Failed",statusCode: 400,case: "Invalid Body"});
    if (!req.body.case || req.body.case.trim() === "") return res.status(400).json({statusMsg: "Failed",statusCode: 400,case: "Invalid Case"});
  
    res.json({
      statusMsg: "Success",
      statusCode: 200,
      case: results
    });
  });
};

exports.onSaveData = (req, res) => {
  Complaint.getAll((err,results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.onEditData = (req, res) => {
  Complaint.getAll((err,results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.onDeleteData = (req, res) => {
  Complaint.getAll((err,results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};