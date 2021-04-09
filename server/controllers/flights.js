const flights = [
    {
        flightNumber: 1,
        startingLocation: 'Baltimore, MD',
        endingLocation: 'Washington, DC',
        souls: 4,
        aircraftType: 'Sikorsky S-92',
        id: 1
        }
]

let id = 2;


module.exports = {
    getFlights: (req, res) => {
        res.status(200).send(flights)
    },

    addFlight: (req, res) => {
        const {
            flightNumber,
            startingLocation,
            endingLocation,
            souls,
            aircraftType,
        } = req.body

        const newFlight = {
            flightNumber,
            startingLocation,
            endingLocation,
            souls,
            aircraftType,
            id,
        }
        id++
        
        flights.push(newFlight);
        res.status(200).send(flights);
    }
}