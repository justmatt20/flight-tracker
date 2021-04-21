// const = require("express"); 

const flights = [
    {
        flightNumber: 427835,
        departure: 'MTN',
        arrival: 'HGR',
        souls: 4,
        aircraftType: 'Sikorsky S-92',
        id: "1"
        },
    { 
        flightNumber: 980445,
        departure: 'ESN',
        arrival: 'SBY',
        souls: 3,
        aircraftType: 'Bell 206',
        id: "2"
    },  
    {
        flightNumber: 85303,
        departure: 'NHK',
        arrival: 'ADW',
        souls: 4,
        aircraftType: 'Eurocopter Dauphin',
        id: "3"
    },
    {
        flightNumber: 482657,
        departure: '2W6',
        arrival: 'ADW',
        souls: 5,
        aircraftType: 'AW-139',
        id: "4"
    },
    {
        flightNumber: 768907,
        departure: 'FDK',
        arrival: 'MTN',
        souls: 2,
        aircraftType: 'Eurocopter EC135',
        id: "5"  
    },
    {
        flightNumber: 134565,
        departure: 'SBY',
        arrival: '2W6',
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
        const updatedLoc = req.body;
        // const indexFlight= flights.findIndex(flight => flight.id === id)

        // if (indexFlight !== -1) {
        //     flights[indexFlight] = updated;
        //     res.status(200).send(flights)
        // }
        if (flights["flight"+ id] !== -1) {
            flights["flight" + id] === updatedLoc;
            // console.log("success")
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
