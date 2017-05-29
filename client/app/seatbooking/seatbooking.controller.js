'use strict';

(function(){

class SeatbookingComponent {
  constructor($scope, $http, socket, booking, $location) {
    this.message = 'Hello';
    this.$scope = $scope;
    this.$http = $http;
    this.booking = booking;
    this.rows = ['A','B','C','D','E','F','G','H','I','J'];
    this.columns = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    this.selectedSeats = [];
    this.bookedSeats = undefined;
    this.bookingForm = {};
    this.$location = $location;
    this.movieDetails = {};
  }

  $onInit(){
    // this.$http.get('/api/paymentendpoints').then(response => {
    //   this.bookedSeats = _.flatten( _.map( _.filter(response.data, (detail)=>{ return detail.name === this.name && detail.theatre === this.theatre } ), (seat)=>{ return seat.bookedSeats }) );
    //   console.log(this.bookedSeats);
    // } );
    // this.movieDetails = this.booking.movieDetails;
    // console.log(this.movieDetails);
    // console.log(this.rows);
    // console.log(this.columns);
    // console.log(this.selectedSeats);
  }

  isSelected(row, col){
    if(_.find(this.selectedSeats, function(seat){ return seat.row === row && seat.col === col })){
      return true;
    } else {
      return false;
    }
    console.log(this.selectedSeats);
  }

  isBooked(row, col){
    if(_.find(this.bookedSeats, function(seat){ return seat.row === row && seat.col === col})){
      console.log(this.bookedSeats);
        return true;
    } else{
      return false;
    }
  }

  selectSeat(row, col, classType){
    if(!this.isSelected(row, col) && !this.isBooked(row, col)){
      console.log("selected");
      this.selectedSeats.push({
        row: row,
        col: col,
        classType: classType
      });
      console.log(this.selectedSeats);
    }

    else{
      this.selectedSeats = _.reject(this.selectedSeats, function(seat){ return seat.row === row && seat.col===col })
    }

    this.bookingForm.platinum = _.filter(this.selectedSeats, function(seat){ return seat.classType === "platinum" });
    this.bookingForm.gold = _.filter(this.selectedSeats, function(seat){ return seat.classType === "gold"})
    this.bookingForm.grandTotal = ( (this.bookingForm.platinum.length * 200) + (this.bookingForm.gold.length * 100) + 30)
    console.log(this.bookingForm);
    console.log(this.selectedSeats);
  }

  bookSeats(){
    this.booking.selectedSeats = this.selectedSeats;
    this.booking.grandTotal = this.bookingForm.grandTotal
    console.log(this.booking);
    this.$location.path('/payment');
  }

}

angular.module('yotemplateApp')
  .component('seatbooking', {
    templateUrl: 'app/seatbooking/seatbooking.html',
    controller: SeatbookingComponent,
    controllerAs: 'seatbookingCtrl'
  });

})();
