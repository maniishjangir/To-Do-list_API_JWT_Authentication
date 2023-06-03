const express = require('express');
const port = 8000;

const app = express();

app.listen(port, () => {
    console.log(`Successfully running server on port : ${port}`);
}).catch((err) => {
    console.error.bind(`Error in Running the server on`, err);
})