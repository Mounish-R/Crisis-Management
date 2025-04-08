// // backend/routes/crises.js
// const express = require('express');
// const router = express.Router();
// const Crisis = require('../models/Crisis');

// // Add a new crisis
// router.post('/', async (req, res) => {
//   try {
//     const crisis = new Crisis({ ...req.body, approved: false });
//     await crisis.save();
//     res.status(201).json({ message: 'Crisis reported successfully', crisis });
//   } catch (error) {
//     console.error('Error saving crisis:', error);
//     res.status(500).json({ error: 'Failed to save crisis' });
//   }
// });

// // Get all crises
// router.get('/', async (req, res) => {
//   try {
//     const crises = await Crisis.find();
//     res.json(crises);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Get only pending (not approved) crises
// router.get('/pending', async (req, res) => {
//   try {
//     const pendingCrises = await Crisis.find({ approved: false });
//     res.json(pendingCrises);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch pending crises' });
//   }
// });

// // Update a crisis approval status
// router.put('/:id', async (req, res) => {
//   try {
//     const updated = await Crisis.findByIdAndUpdate(
//       req.params.id,
//       { approved: req.body.approved },
//       { new: true }
//     );
//     res.json(updated);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to update crisis status' });
//   }
// });

// module.exports = router;
// backend/routes/crises.js
const express = require('express');
const router = express.Router();
const Crisis = require('../models/Crisis');

// Add a new crisis
router.post('/', async (req, res) => {
  try {
    const crisis = new Crisis({ ...req.body, approved: false });
    await crisis.save();
    res.status(201).json({ message: 'Crisis reported successfully', crisis });
  } catch (error) {
    console.error('Error saving crisis:', error);
    res.status(500).json({ error: 'Failed to save crisis' });
  }
});

// Get all crises
router.get('/', async (req, res) => {
  try {
    const crises = await Crisis.find();
    res.json(crises);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get only pending (not approved) crises
router.get('/pending', async (req, res) => {
  try {
    const pendingCrises = await Crisis.find({ approved: false });
    res.json(pendingCrises);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pending crises' });
  }
});

// GET - Only approved crises
router.get('/approved', async (req, res) => {
  try {
    const approvedCrises = await Crisis.find({ approved: true });
    res.json(approvedCrises);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch approved crises' });
  }
});


// ✅ NEW: Update crisis approval status using `status: "Approved"` or `"Rejected"`
router.put('/:id/review', async (req, res) => {
  try {
    const { status } = req.body;

    const updated = await Crisis.findByIdAndUpdate(
      req.params.id,
      { approved: status === 'Approved' },
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update crisis status' });
  }
});

module.exports = router;
