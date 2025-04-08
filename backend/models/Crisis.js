// models/Crisis.js
const mongoose = require('mongoose');

const crisisSchema = new mongoose.Schema({
  title: String,
  location: String,
  severity: String,
  description: String,
  approved: { type: Boolean, default: false } // NEW
});

module.exports = mongoose.model('Crisis', crisisSchema);
// const mongoose = require('mongoose');

// const volunteerSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phone: String,
//   address: String,
//   status: { type: String, default: 'Pending' }  // ← Add this!
// });

// module.exports = mongoose.model('Volunteer', volunteerSchema);
