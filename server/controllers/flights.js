const flights = [
    {
        flightNumber: 427835,
        departure: 'Baltimore, MD',
        arrival: 'Washington, DC',
        souls: 4,
        aircraftType: 'Sikorsky S-92',
        id: 1
        },
    { 
        flightNumber: 980445,
        departure: 'Miami, FL',
        arrival: 'West Palm Beach, FL',
        souls: 3,
        aircraftType: 'Bell 206',
        id: 2
    }     
]

let id = 3;


module.exports = {
    getFlights: (req, res) => {
        res.status(200).send(flights)
    },

    addFlight: (req, res) => {
        const {
            flightNumber,
            departure,
            arrival,
            souls,
            aircraftType,
        } = req.body

        const newFlight = {
            flightNumber,
            departure,
            arrival,
            souls,
            aircraftType,
            id,
        }
        id++
        
        flights.push(newFlight);
        res.status(200).send(flights);
    },

    updateFlight: (req, res) => {
        const {
            flightNumber,
            arrival,
            departure
        } = req.body

        // const updatedFlight = {
        //     flightNumber,
        //     departure,
        //     arrival,
        //     souls,
        //     aircraftType,
        //     id,
        // }
        res.status(200).send(flights)
    },

    deleteFlight: (req,res) => {

    }
}