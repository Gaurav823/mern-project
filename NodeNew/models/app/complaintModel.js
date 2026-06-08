var db = require('../../config/database');


// exports.getAll = (value,callback) => {
//   console.log(value);
//   mockResults = [{"id" :5},{"id":6}];
//   callback(null, mockResults);
// };
exports.getAll = (data,callback) => {
  const sql = 'SELECT * FROM complaint_fault_closure';
  db.query(sql, callback);
};