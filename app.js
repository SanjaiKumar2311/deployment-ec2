const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World! This is a sample app deployed using AWS CodePipeline!');
});

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});
