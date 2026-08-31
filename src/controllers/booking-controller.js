
const { BookingService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const {SuccessResponse, ErrorResponse} = require('../utils/common');
 
 
async function createBooking(req, res) {
    try {
        console.log('inside controller');
        console.log(req.body.flightId);
        const response = await BookingService.createBooking({
           flightId: req.body.flightId
        });
        const successResponse = { ...SuccessResponse, data: response };
        return res
            .status(StatusCodes.OK) 
            .json(successResponse);
    } catch (error) {
        console.log(error);
        const errorResponse = { ...ErrorResponse, message: error.message };
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(error);
    }
}
 




module.exports= { createBooking}

