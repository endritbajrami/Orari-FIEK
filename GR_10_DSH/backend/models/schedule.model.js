const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  professor: { type: String, required: true },
  subject: { type: String, required: true },
  ects: {type:Number, required:true},
  nrhours: {type: Number, required: true},
  day: {type:String , required: true},
  duration: { type: String, required: true },
  classroom: {type: Number, required:true},
  stype: {type: String, required:true},
  group: {type:String, required:true},
  semester:{type:String, reuqired:true},
  note:{type:String, required: false}
}, {
  timestamps: true,
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;