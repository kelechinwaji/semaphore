import { Request, Response } from 'express';
import { createBooking, unbookTickets } from '../controller/booking';

describe('createBooking', () => {
  it('should create a booking successfully', async () => {
    // Mock the request and response objects
    const req = {
      body: {
        userId: 'user123',
        ticketCount: 2,
      },
    } as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    // Call the function
    await createBooking(req, res);

    // Verify the response
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      status: 'success',
      message: 'Booking created successfully',
      data: expect.any(Object),
    });
  });
});


