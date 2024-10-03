
import { Router } from 'express'
import { getAllBookings, getOneBooking, postBooking } from '../controllers/booking-controllers.js'


 export const bookingRouter = Router()

bookingRouter.get('/bookings', getAllBookings)

bookingRouter.get('/bookings/:id', getOneBooking)

bookingRouter.post('/bookings', postBooking)

