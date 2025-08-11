const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST - Save contact form
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ success: true, message: 'Message saved successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to save message' });
    }
});

module.exports = router;
