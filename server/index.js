const express = require('express');
const { getFlights, addFlight } = require('./controllers/flights');

const app = express();

const PORT = 4040;

app.use(express.json());

app.get('/api/flights', getFlights)
app.post('/api/flights', addFlight)


app.listen(PORT, () => console.log(`Listening on ${PORT}`));