

const Datastore = require('nedb');

const db = new Datastore({ filename: 'students.db', autoload: true });

const Student = {
  create: (student, callback) => {
    db.insert(student, callback);
  },
  getAll: (callback) => {
    db.find({}, callback);
  },
  getById: (id, callback) => {
    db.findOne({ _id: id }, callback);
  },
  update: (id, student, callback) => {
    db.update({ _id: id }, { $set: student }, {}, callback);
  },
  delete: (id, callback) => {
    db.remove({ _id: id }, {}, callback);
  },
};

module.exports = Student;
