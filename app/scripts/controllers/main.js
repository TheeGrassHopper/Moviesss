'use strict';

/**
 * @ngdoc function
 * @name movieManiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieManiaApp
*/
angular.module('movieManiaApp')
	.controller('MainCtrl', function ($scope) {
	    var movieList = [{
	      'title': 'Usual Suspects',
	      'image': 'http://ia.media-imdb.com/images/M/MV5BMzI1MjI5MDQyOV5BMl5BanBnXkFtZTcwNzE4Mjg3NA@@._V1_SX214_AL_.jpg',
	      'description': 'A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which begin when five criminals meet at a seemingly random police lineup.'
	    },
	    {
	      'title': 'Star Wars',
	      'image': 'http://ia.media-imdb.com/images/M/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@._V1_SX214_AL_.jpg',
	      'description': 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the universe from the Empires world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vaders'
	    },
	    {
	    'title': 'Dynasty',
	    'image': 'http://ia.media-imdb.com/images/M/MV5BMTQ5MDY0NDc3MV5BMl5BanBnXkFtZTcwODE4MjgyMQ@@._V1_SY98_CR1,0,67,98_AL_.jpg',
	    'description':	'Stevens ex-boyfriend Ted comes to town; a co-worker finds out. Fallon and Jeff elope; but to Fallon the marriage is a business deal'
	    }];
	    $scope.movies = movieList;
  		$scope.newMovieTitle='';
  		$scope.newMoviedescription='';
  		$scope.newMovieImage='';

  		$scope.validateTitle= function(){
  			if($scope.newMovieTitle.length > 0){
  				console.debug($scope.newMovieTitle);
  			} else{
  	    	  window.alert('Title is Required');
  				}
  			};

  		$scope.addMovie = function(){
  			var movie = {
  				title: $scope.newMovieTitle,
  				category: $scope.newMovieCategory,
  				image: $scope.newMovieImage,
  				description: $scope.newMovieDescription
  			};

  			$scope.movies.push(movie);
  		};

  		$s
  		}	