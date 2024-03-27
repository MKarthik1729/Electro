const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

// Define your Mongoose schema and model for the data
const Product = require('../models/Product'); // Assuming Product.js is where you define your schema and model

const app = express.Router();

app.get('/', (req, res) => {
  res.send("This is the admin route.");
});

const upload = multer({ dest: 'src/uploads/' });

app.post("/api/upload", (req, res) => {
  const imageData = req.body.image;
  const imageBuffer = Buffer.from(imageData.data, "base64");
  Image.create({
    name: imageData.name,
    type: imageData.type,
    data: imageBuffer,
  })
    .then(() => {
      res.status(201).json({
        success: true,
        message: "Image uploaded successfully",
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Unable to upload image",
      });
    });
}); 

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    // Rename the file
    const originalFilePath = req.file.path;
    const newFilePath = path.join(path.dirname(originalFilePath), `${req.file.filename}.png`);
    fs.renameSync(originalFilePath, newFilePath);
    console.log('File renamed successfully:', newFilePath);

    // Create a new instance of your Mongoose model with form data
    const newData = new Product({
      file: newFilePath,
      cost: req.body.cost,
      title: req.body.title,
      description: req.body.description,
      quantity: req.body.quantity
    });

    // Save the data to MongoDB
    const savedData = await newData.save();
    console.log('Data saved to MongoDB:', savedData);

    res.send('File uploaded and data saved to MongoDB successfully.');
  } catch (error) {
    console.error('Error uploading file and saving data:', error);
    res.status(500).send('Error uploading file and saving data.');
  }
});
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error('Error retrieving products:', error);
    res.status(500).send('Error retrieving products.');
  }
});

app.get('/products/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);

    if (!product || !product.file) {
      return res.status(404).json({ error: 'Product or image not found' });
    }

    // Read the image file
    const imagePath = product.file; // Assuming 'file' contains the path to the image file
    const imageBuffer = fs.readFileSync(imagePath); // Read the image file

    // Send the image data as a response
    res.contentType('image/png'); // Set the content type to PNG
    res.send(imageBuffer);
  } catch (error) {
    console.error('Error retrieving image:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId)
    console.log(product)
      res.send(product)

  }catch (error) {
    console.error('Error retrieving image:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = app;
