import express from 'express';


const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/forward/:url', async(req, res) => {
    const url = req.params.url;
    const data = req.body;
    const ress = await fetch('https://' + url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    });
    const response = await ress.text(); 
    return res.send(response);
});

app.get('/forward/:url', async(req, res) => {
    const url = req.params.url;
    // console.log(url)
    const response = await fetch('https://' + url);
    const data = await response.text(); 
    return res.send(data);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});