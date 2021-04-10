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
    },  
    {
        flightNumber: 85303,
        departure: 'Park City, UT',
        arrival: 'Salt Lake City, UT',
        souls: 4,
        aircraftType: 'Eurocopter Dauphin',
        id: 3
    },
    {
        flightNumber: 482657,
        departure: 'Frederick, MD',
        arrival: 'Bethesda, MD',
        souls: 5,
        aircraftType: 'AW-139',
        id: 4
    }
]

let id = 5;


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
            departure,
            arrival,
            souls,
            aircraftType,
        } = req.body 

        const updatedFlight = {
            flightNumber,
            departure,
            arrival,
            souls,
            aircraftType,
            id,
        }
        res.status(200).send(flights)
    },

    deleteFlight: (req,res) => {
        res.status(200).send(flights)
    }
}