// const = require("express"); 

const flights = [
    {
        flightNumber: 427835,
        departure: 'Baltimore, MD',
        arrival: 'Washington, DC',
        souls: 4,
        aircraftType: 'Sikorsky S-92',
        id: "1"
        },
    { 
        flightNumber: 980445,
        departure: 'Miami, FL',
        arrival: 'West Palm Beach, FL',
        souls: 3,
        aircraftType: 'Bell 206',
        id: "2"
    },  
    {
        flightNumber: 85303,
        departure: 'Park City, UT',
        arrival: 'Salt Lake City, UT',
        souls: 4,
        aircraftType: 'Eurocopter Dauphin',
        id: "3"
    },
    {
        flightNumber: 482657,
        departure: 'Frederick, MD',
        arrival: 'Bethesda, MD',
        souls: 5,
        aircraftType: 'AW-139',
        id: "4"
    },
    {
        flightNumber: 768907,
        departure: 'Los Angeles, CA',
        arrival: 'San Diego, CA',
        souls: 2,
        aircraftType: 'Eurocopter EC135',
        id: "5"  
    },
    {
        flightNumber: 134565,
        departure: 'Columbia, MO',
        arrival: 'Macon, MO',
        souls: 6,
        aircraftType: 'Airbus H135',
        id: "6"  
    }
]
// const dataTypes = JSON.stringify(flights)

let id = "7";



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
        const { id } = req.params;
        const updated = req.body;
        const indexFlight= flights.findIndex(flight => flight.id === id)

        if (indexFlight !== -1) {
            flights[indexFlight] = updated;
            res.status(200).send(flights)
        }
        
    },

    deleteFlight: (req,res) => {
        const { id } = req.params;
        const deletedFlight = flights.find(flight => flight.id === id)
        if (deletedFlight) {
            flights.filter(flight => flight.id !== id)
            res.status(200).send(flights)
        // } else {
            // res.status(404).send({message: 'The flight you are looking for does not exist.'})
            // res.sendStatus()
        }
    }

}
