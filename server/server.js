const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Connect to MongoDB (replace with your MongoDB connection URI)
mongoose.connect('mongodb+srv://anishpatil0307:ooge1188@cluster0.yzs5vvq.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a MongoDB schema and model for your data
const sensorDataSchema = new mongoose.Schema({
  temperature: Number,
  humidity: Number,
  timestamp: Date,
});

const SensorData = mongoose.model('SensorData', sensorDataSchema);

app.use(bodyParser.json());

// Create a route to receive sensor data from the ESP32
app.post('/upload', async (req, res) => {
  try {
    const { temperature, humidity } = req.body;

    // Create a new sensor data document
    const sensorData = new SensorData({
      temperature,
      humidity,
      timestamp: new Date(),
    });

    // Save the data to MongoDB
    const result = await sensorData.save();

    res.status(200).json({ message: 'Data saved successfully', result});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/sensor-data', async (req, res) => {
    try {
      // Use the find method to retrieve all documents from the SensorData collection
      const allSensorData = await SensorData.find();
  
      res.status(200).json(allSensorData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
