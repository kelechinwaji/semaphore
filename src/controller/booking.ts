import { Request, Response } from "express";
import { bookingModel, Booking } from '../database/booking.models';

export const createBooking = async (req: Request, res: Response) => {
    const { userId, ticketCount } = req.body;
  
    try {
      const bookingData: Booking = {
        userId,
        ticketCount,
        createdAt: new Date(),
      };
  
      const createdBooking = await bookingModel.create(bookingData);
  
      res.status(201).json({
        status: "success",
        message: "Booking created successfully",
        data: createdBooking,
      });
    } catch (error: any) {
      res.status(500).json({
        status: "error",
        message: "An error occurred while creating the booking.",
        error: error.message,
      });
    }
  };
  
  export const unbookTickets = async (req: Request, res: Response) => {
    const { bookingId } = req.params;
  
    try {
      const booking = await bookingModel.findById(bookingId);
  
      if (!booking) {
        return res.status(404).json({
          status: "error",
          message: "Booking not found",
        });
      }
  
      await bookingModel.deleteOne({ _id: booking._id });
  
      res.status(200).json({
        status: "success",
        message: "Tickets unbooked successfully",
        data: booking,
      });
    } catch (error: any) {
      res.status(500).json({
        status: "error",
        message: "An error occurred while unbooking the tickets.",
        error: error.message,
      });
    }
  };
  
  