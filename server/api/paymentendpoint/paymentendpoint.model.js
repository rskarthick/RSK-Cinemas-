'use strict';

import mongoose from 'mongoose';

var PaymentendpointSchema = new mongoose.Schema({
  movie: {
    type: String,
    required: true
  },
  theatre: {
    type: String,
    required: true
  },
  bookedSeats: [{
    classType: String,
    row: String,
    col: Number
  }],
  grandTotal:{
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }
});

export default mongoose.model('Paymentendpoint', PaymentendpointSchema);
