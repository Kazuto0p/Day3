// 1. Importing the express
const express = require('express');
const employeeModel = require('./models');

// 2. Create an Express app instance
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 3. API endpoints
app.get('/', (req, res) => {
    res.send("Message from Server");
});

app.get('/trial', (req, res) => {
    res.send("trial Server");
});

app.post('/add', async (req, res) => {
    try {
        const result = await new employeeModel(req.body);
        await result.save();
        res.send("Data added");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding data");
    }
});

// 4. Port
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
