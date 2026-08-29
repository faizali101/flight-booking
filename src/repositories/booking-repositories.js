const CrudRepository = require('./crud-repository');
const { StatusCodes } = require('http-status-codes');
const { Bookings } = require('../models');   

class BookingRepository extends CrudRepository {
    constructor() {
        super(Bookings);
    }
    async getAllBookings(filter){
        const response = await this.model.findAll({
            where: filter
        });
        return response;
    }
}

module.exports = BookingRepository;