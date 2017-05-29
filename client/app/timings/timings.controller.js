'use strict';

(function(){

class TimingsComponent {
  constructor($http, booking, $location) {
    this.$http = $http;
    this.$location = $location;
    this.booking = booking;
    this.movieDetails = [];
  }

  $onInit(){
    this.$http.get('/api/movietheatresmappingendpoints').then(response => {
      this.mappedMovies = response.data;
      this.movieDetails = _.filter(this.mappedMovies, (mapping)=>{ return mapping.MovieName === this.booking.movieName });
      this.dates = _.flatten(_.pluck(this.movieDetails, 'Dates'));
    });
  }

  getTheatres(date){
    this.theatres = _.filter(this.movieDetails, (movie)=>{ return movie.Date = date });
    console.log(this.theatres);
    this.booking.date = date;
  }

  select(theatre, time){
    this.booking.theatreName = theatre;
    this.booking.time = time;
    this.$location.path('/seatbooking');
  }

}

angular.module('yotemplateApp')
  .component('timings', {
    templateUrl: 'app/timings/timings.html',
    controller: TimingsComponent,
    controllerAs: 'timingsCtrl'
  });

})();
