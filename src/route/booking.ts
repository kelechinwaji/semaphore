import { Application } from "express";
import { createBooking, unbookTickets } from "../controller/booking";



export const bookingRoute = (app: Application) => {
 app.post('/booking', createBooking);
 app.delete('/unbook/:bookingId', unbookTickets);
};

export default bookingRoute;