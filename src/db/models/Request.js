/* eslint-disable no-param-reassign */
const mongoose = require('mongoose');

// define the User model schema
const RequestSchema = new mongoose.Schema({

  fname: {
    type: String,
    index: true
  },
  lname: {
    type: String,
    index: true
  },
  employeeCode: {
    type: String,
    index: true
  },
  email: {
    type: String,
    index: true
  },
  phone: {
    type: String,
    index: true
  },
  contractNumber: {
    type: String,
    index: true
  },
  charge: {
    type: String,
    index: true
  },
  virtualevent: {
    type: String,
    index: true
  },
  tripJustification: {
    type: String,
    index: true
  },
  tripOrganization: {
    type: String,
    index: true
  },
  travelFrom: {
    type: String,
    index: true
  },
  travelTo: {
    type: String,
    index: true
  },
  workDestination: {
    type: String,
    index: true
  },
  travelDate: {
    type: String,
    index: true
  },
  numberOfDays: {
    type: String,
    index: true
  },
  numberOfVacation: {
    type: String,
    index: true
  },
  foreignTrip: {
    type: String,
    index: true
  },
  itAsset: {
    type: String,
    index: true
  },
  airlinereservation: {
    type: String,
    index: true
  },
  hotelreservation: {
    type: String,
    index: true
  },
  conferenceregistration: {
    type: String,
    index: true
  },
  conferenceregistrationfee: {
    type: String,
    index: true
  },
  requestcash: {
    type: String,
    index: true
  },
  estimatecost: {
    type: String,
    index: true
  },
  registerNcts: {
    type: String,
    index: true
  },
  nctsEmail: {
    type: String,
    index: true
  },
  approverName: {
    type: String,
    index: true
  },
  requestApprovalDate: {
    type: String,

    index: true
  },
  groupleader: {
    type: String,

    index: true
  },
  programmanagesDate: {
    type: String,

    index: true
  },
  customerconference: {
    type: String,
    index: true
  },
  customerconferenceDate: {
    type: String,

    index: true
  },
  corDate: {
    type: String,

    index: true
  },
  travelcordinatorDate: {
    type: String,

    index: true
  },
  airfareTrainAmount: {
    type: String,

    index: true
  },
  airfareTrainDays: {
    type: String,

    index: true
  },
  airfareTrainTotal: {
    type: String,

    index: true
  },
  lodgingAmount: {
    type: String,

    index: true
  },
  lodgingDays: {
    type: String,

    index: true
  },
  lodgingTotal: {
    type: String,

    index: true
  },
  mieAmount: {
    type: String,

    index: true
  },
  mieDays: {
    type: String,

    index: true
  },
  mieTotal: {
    type: String,

    index: true
  },
  conferenceAmount: {
    type: String,

    index: true
  },
  conferenceDays: {
    type: String,

    index: true
  },
  conferenceTotal: {
    type: String,

    index: true
  },
  automobileRentalAmount: {
    type: String,

    index: true
  },
  automobileRentalDays: {
    type: String,

    index: true
  },
  automobileRentalTotal: {
    type: String,

    index: true
  },
  allTravelTotal: {
    type: String,

    index: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  },

}, { timestamps: true });


module.exports = mongoose.model('travelrequests', RequestSchema);