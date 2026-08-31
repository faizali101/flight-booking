
const { BookingRepository } = require('../repositories');
const { StatusCodes } = require('http-status-codes');
const { AppError } = require('../utils');
const axios = require('axios');
const db = require('../models')
const { FLIGHT_SERVICE, ServerConfig}  = require('../config');



async function createBooking(data) {
    try {
        const result = await db.sequelize.transaction(async (t) => {
            const response = await axios.get(
                `${ServerConfig.FLIGHT_SERVICE}/api/v1/flights/${data.flightId}`
            );
            const flight = response.data.data;
            console.log("Flight:", flight);
            // create booking here
            return flight;
        });
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}



module.exports = { createBooking }


