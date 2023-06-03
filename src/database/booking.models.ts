import mongoose, { Schema, Document } from 'mongoose';
import { ObjectId } from 'mongodb';

// booking type definition
export interface Booking {
    userId: string;
    ticketCount: number;
    createdAt: Date;
  }

  // booking database document
  const bookingSchema= new Schema({
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    ticketCount: { type: Number, required: true, max: 10 },
    createdAt: { type: Date, default: Date.now },
  });



export const bookingModel = mongoose.model<Booking>('booking', bookingSchema);
