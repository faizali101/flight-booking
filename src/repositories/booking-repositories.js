const CrudRepository = require('./crud-repositories');
const { StatusCodes } = require('http-status-codes');
const { Booking } = require('../models');   

class BookingRepository extends CrudRepository {
    constructor() {
        super(Booking);
    }
    async getAllBookings(filter){
        const response = await this.model.findAll({
            where: filter
        });
        return response;
    }
}

module.exports = BookingRepository;