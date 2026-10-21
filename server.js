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
  { name: 'Computer Speakers', category: 'audio', brand: 'Lenrue', year: 2018, quantity: 1},
  { name: '27" 1440p TUF Monitor', category: 'peripheral', brand: "Asus", year: 2017, quantity: 2}
];

app.get('/api/equipment', (req, res) => {
  // Return the full equipment array.
  res.json(equipment);
});

// Keep the filter route before /:id.
app.get('/api/equipment/filter', (req, res) => {
  // Return equipment matching the category query.
  const category = req.query.category;

  if (!category) { // if the category was not found, just return all equipment
    return res.json(equipment);
  }

  // find for all matches by using the filter method and check if item category is equal to the passed category
  const matches = equipment.filter((item) => item.category === category);
  res.json(matches);
});

app.get('/api/equipment/:id', (req, res) => {
  // Return the equipment at this array index.
  const id = Number(req.params.id); // get id via parameter
  const item = equipment[id]; // try to access the array with the id to get the item

  if (!item) { // checks if the item was found
    return res.status(404).send('Equipment not found'); // returns 404 error with message
  }

  // returns the specific item
  res.json(item);
});

app.post('/api/equipment', (req, res) => {
  // Allows for a new equipment to be added
  const { name, category, brand, year, quantity } = req.body;

  if (!name || !category) { // check if name and category were given, if not return 400 with a message
    return res.status(400).send('name and category are required');
  }

  // create the new item 
  const newItem = {name, category, brand, year, quantity};
  // add it to the array
  equipment.push(newItem);
  // success status with new item added
  res.status(201).json(newItem);
});

app.put('/api/equipment/:id', (req, res) => {
  const id = Number(req.params.id);

  if (!equipment[id]) // checks if the equipment exist, if not sends not found status with message
  {
    return res.status(404).send('Equipment not found');
  }

  const { name, category, brand, year, quantity } = req.body;

  if (!name || !category) { // validates the name and category to be mandatory - if not provided respond with bad request status error and message
    return res.status(400).send('name and category are required');
  }

  // write the update back to the array
  equipment[id] = { name, category, brand, year, quantity };

  // returns the exact equipment
  res.json(equipment[id]);

});

app.delete('/api/equipment/:id', (req, res) => {
  // Remove the equipment at this array index.
  const id = Number(req.params.id);

  if (!equipment[id]) { // checks if it exists if not then return not found stauts with message
    return res.status(404).send('Equipment not found');
  }

  // gets the removed item through splicing by the chosen id and index 1
  const removed = equipment.splice(id, 1);
  res.json(removed[0]); // return that in json
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
