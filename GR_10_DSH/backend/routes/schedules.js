const router = require('express').Router();
let Schedule = require('../models/schedule.model');

router.route('/').get((req, res) => {
  Schedule.find()
    .then(schedules => res.json(schedules))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const professor = req.body.professor;
  const subject = req.body.subject;
  const ects = Number(req.body.ects);
  const nrhours = Number(req.body.nrhours);
  const day = req.body.day;
  const duration = req.body.duration;
  const classroom = Number(req.body.classroom);
  const stype = req.body.stype;
  const group = req.body.group;
  const semester = req.body.semester;
  const note = req.body.note;

  const newSchedule = new Schedule({
    professor,
    subject,
    ects,
    nrhours,
    day,
    duration,
    classroom,
    stype,
    group,
    semester,
    note,
  });

  newSchedule.save()
  .then(() => res.json('Schedule added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Schedule.findById(req.params.id)
    .then(schedule => res.json(schedule))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Schedule.findByIdAndDelete(req.params.id)
    .then(() => res.json('Schedule deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Schedule.findById(req.params.id)
    .then(schedule => {
      schedule.professor = req.body.professor;
      schedule.subject = req.body.subject;
      schedule.ects = Number(req.body.ects);
      schedule.nrhours = Number(req.body.nrhours);
      schedule.day = req.body.day;
      schedule.duration = req.body.duration;
      schedule.classroom = Number(req.body.classroom);
      schedule.stype = req.body.stype;
      schedule.group = req.body.group;
      schedule.semester = req.body.semester;
      schedule.note = req.body.note;
      

      schedule.save()
        .then(() => res.json('Schedule updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;