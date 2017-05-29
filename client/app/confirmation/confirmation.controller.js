'use strict';

(function(){

class ConfirmationComponent {
  constructor($http,booking) {
    this.message = 'Hello';
    this.booking = booking;
  }

  $onInit(){
    this.movieName = this.booking.movieName;
    this.theatreName = this.booking.theatreName;
    this.date = this.booking.date;
    this.time = this.booking.time;
    this.selectedSeats = this.booking.selectedSeats;
    this.grandTotal = this.booking.grandTotal;
    this.noOfSeats = this.selectedSeats.length;
  }
}

angular.module('yotemplateApp')
  .component('confirmation', {
    templateUrl: 'app/confirmation/confirmation.html',
    controller: ConfirmationComponent,
    controllerAs: 'confirmationCtrl'
  });

})();
