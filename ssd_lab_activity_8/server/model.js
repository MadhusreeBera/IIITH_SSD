const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    roll: String, // String is shorthand for {type: String}
    password: String,
    role: String,
  },
  { timestamps: true }
);
const User = mongoose.model('User', userSchema);
const querySchema = new Schema(
  {
    exam_name: String,
    course_name: String,
    question_num: Number,
    ta_roll: String,
    std_roll: String,
    ta_comment: String,
    std_comment: String,
    IsActive: Boolean,
  },
  { timestamps: true }
);
const Query = mongoose.model('Query', querySchema);

module.exports = { User, Query };
