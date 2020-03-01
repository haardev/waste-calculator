const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


app.get('/', (req, res) => res.send('It works'));


app.get('/result', function (req, res) {
    const result = {
        data : {
            id: '1231'
        }
    };

    res.send(result);
});
