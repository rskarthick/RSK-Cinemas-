'use strict';

function bookingService() {
	this.movieName = "";
	this.theatreName = "";
	this.date = "";
	this.time = "";
	this.selectedSeats = [];
	this.grandTotal = 0;
}

angular.module('yotemplateApp')
  .service('booking', bookingService);
