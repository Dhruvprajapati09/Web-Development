const express = require('express');
const app = express();
let port = 8080;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// app.use((req, res) => {
//     console.log('request received');   
// });

app.get('/', (req, res) => {
    res.send('this is root path');
});

app.get('/hello', (req, res) => {
    res.send('welcome to express server');
});

app.get('/data', (req, res) => {
    res.json({ name: 'John', age: 30, city: 'New York' });
});

app.get('/about', (req, res) => {
    res.send('This is the about page');
});

// app.get(/.*/, (req, res) => {
//     res.status(404).send("This path does not exist");
// });

app.post('/submit', (req, res) => {
    res.send('Form submitted successfully');
});

app.get('/:username/:id', (req, res) => {
    let { username, id } = req.params;
    let htmlTag = `<h1>Welcome to our page @${username}.</h1>`;
    res.send(htmlTag);
});

app.get('/search', (req, res) => {
    let { q } = req.query;
    if(!q){
        res.send('<h1>Nothig search</h1>');
    }
    res.send(`<h1>search for query is ${q}</h1>`)
})

