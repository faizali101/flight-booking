const { BookingRepository } = require('../repositories');
const { StatusCodes } = require('http-status-codes');
const { AppError } = require('../utils');
const axios = require('axios');
const db = require('../models')
const {ServerConfig}  = require('../config');



// async function createBooking(data) {
//    return new Promise ((resolve, reject)=> {
//            const result =  db.sequelize.transaction(async function bookingImpl (t) {
//                const flight = await axios.get(`${ServerConfig.FLIGHT_SERVICE}/api/v1/flights/${data.flightId}`);
//                const flightData = flight.data.data;
//                 if(data.noOfSeats> flightData.totalSeats) {
//                 reject( new AppError ('Seats not available', StatusCodes.BAD_REQUEST))
//             }
//             resolve(true);
//         });
//         return true;
//     })
// }

async function createBooking(data) {
    return db.sequelize.transaction(async function bookingImpl(t) {

        const flight = await axios.get(
            `${ServerConfig.FLIGHT_SERVICE}/api/v1/flights/${data.flightId}`
        );

        const flightData = flight.data.data;

        if (data.noOfSeats > flightData.totalSeats) {
            throw new AppError(
                'Seats not available',
                StatusCodes.BAD_REQUEST
            );
        }

        return true;
    });
}

module.exports = { createBooking }


