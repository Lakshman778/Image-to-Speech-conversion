const express = require('express');
const multer = require('multer');
const Tesseract = require('tesseract.js');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Serve the front-end HTML file
app.use(express.static('public'));

// Endpoint to handle image upload and OCR processing
app.post('/upload', upload.single('image'), (req, res) => {
    const imagePath = req.file.path;

    // Perform OCR using Tesseract.js
    Tesseract.recognize(imagePath, 'eng', { logger: info => console.log(info) })
        .then(({ data: { text } }) => {
            console.log('Extracted Text:', text);
            res.json({ text });
            // Delete the uploaded image after processing
            fs.unlinkSync(imagePath);
        })
        .catch(err => {
            console.error("OCR error:", err);
            res.status(500).json({ error: 'Failed to process image' });
        });
});
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
