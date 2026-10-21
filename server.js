/**
 * Midterm API Project - COMP229
 * Implement the six equipment API endpoints described in README.md.
 * Use the array index as the ID: index 0 is the first equipment item.
 * Add exactly two personalized items to the five supplied below.
 */
import express from 'express';

const app = express();
app.use(express.json());

let equipment = [
  { name: 'USB Microphone', category: 'audio', brand: 'AudioLab', year: 2021, quantity: 5 },
  { name: 'LED Panel', category: 'lighting', brand: 'BrightWorks', year: 2022, quantity: 4 },
  { name: 'Network Switch', category: 'networking', brand: 'NetCore', year: 2020, quantity: 3 },
  { name: 'Cable Tester', category: 'tools', brand: 'TestPro', year: 2019, quantity: 6 },
  { name: 'Studio Headphones', category: 'audio', brand: 'SoundCraft', year: 2023, quantity: 8 },
  { name: 'RGB Mechanical Keyboard', category: 'peripheral', brand: 'msi', year: 2018, quantity: 1},
  { name: '27" 1440p TUF Monitor', category: 'peripheral', brand: "Asus", year: 2017, quantity: 2}
];

app.get('/api/equipment', (req, res) => {
  // TODO: Return the full equipment array.
  res.status(501).send('Not Implemented');
});

// Keep the filter route before /:id.
app.get('/api/equipment/filter', (req, res) => {
  // TODO: Return equipment matching the category query.
  res.status(501).send('Not Implemented');
});

app.get('/api/equipment/:id', (req, res) => {
  // TODO: Return the equipment at this array index.
  res.status(501).send('Not Implemented');
});

app.post('/api/equipment', (req, res) => {
  // TODO: Add an equipment item to the array.
  res.status(501).send('Not Implemented');
});

app.put('/api/equipment/:id', (req, res) => {
  // TODO: Update the equipment at this array index.
  res.status(501).send('Not Implemented');
});

app.delete('/api/equipment/:id', (req, res) => {
  // TODO: Remove the equipment at this array index.
  res.status(501).send('Not Implemented');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '127.0.0.1', err => {
  if (err) {
    console.error(`Cannot start on port ${PORT}: ${err.message}`);
    process.exitCode = 1;
    return;
  }
  console.log(`Server is running on http://localhost:${PORT}`);
});
