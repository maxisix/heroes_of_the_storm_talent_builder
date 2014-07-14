var app = angular.module('app', ['ngRoute']);



app.config(function($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'partials/heroes.html', controller: 'HeroesCtrl'})
		.when('/hero_talents/:id', {templateUrl: 'partials/hero_talents.html', controller: 'TalentsCtrl'})
		.when('/build', {templateUrl: 'partials/build.html'})
		.otherwise({redirectTo: '/'})
});




app.factory('HeroesFactory', function() {
	var factory = {
		heroes : [
			{
				"id": 1,
				"name": "Abathur",
				"thumbnail": "thumb-abathur.png",
				"heroRotation": false,
				"talents": {
					"4": {
						"talent_1": {
							"name": "asd",
							"description": "",
							"thumbnail": ""
						},
						"talent_2": {
							"name": "dsa",
							"description": "",
							"thumbnail": ""
						},
						"talent_3": {
							"name": "fds",
							"description": "",
							"thumbnail": ""
						},
						"talent_4": {
							"name": "fds",
							"description": "",
							"thumbnail": ""
						}
					}
				}
			},
			{
				"id": 2,
				"name": "Arthas",
				"thumbnail": "thumb-arthas.png",
				"heroRotation": true
			},
			{
				"id": 3,
				"name": "Brightwing",
				"thumbnail": "thumb-brightwing.png",
				"heroRotation": false
			},
			{
				"id": 4,
				"name": "Diablo",
				"thumbnail": "thumb-diablo.png",
				"heroRotation": false
			},
			{
				"id": 5,
				"name": "Etc",
				"thumbnail": "thumb-etc.png",
				"heroRotation": false
			},
			{
				"id": 6,
				"name": "Falstad",
				"thumbnail": "thumb-falstad.png",
				"heroRotation": true
			},
			{
				"id": 7,
				"name": "Gazlowe",
				"thumbnail": "thumb-gazlowe.png",
				"heroRotation": false
			},
			{
				"id": 8,
				"name": "Ilidan",
				"thumbnail": "thumb-illidan.png",
				"heroRotation": false
			},
			{
				"id": 9,
				"name": "Kerrigan",
				"thumbnail": "thumb-kerrigan.png",
				"heroRotation": false
			},
			{
				"id": 10,
				"name": "Lili",
				"thumbnail": "thumb-lili.png",
				"heroRotation": false
			},
			{
				"id": 11,
				"name": "Malfurion",
				"thumbnail": "thumb-malfurion.png",
				"heroRotation": false
			},
			{
				"id": 12,
				"name": "Muradin",
				"thumbnail": "thumb-muradin.png",
				"heroRotation": true
			},
			{
				"id": 13,
				"name": "Murky",
				"thumbnail": "thumb-murky.png",
				"heroRotation": false
			},
			{
				"id": 14,
				"name": "Nazeebo",
				"thumbnail": "thumb-nazeebo.png",
				"heroRotation": true
			},
			{
				"id": 15,
				"name": "Nova",
				"thumbnail": "thumb-nova.png",
				"heroRotation": false
			},
			{
				"id": 16,
				"name": "Raynor",
				"thumbnail": "thumb-raynor.png",
				"heroRotation": false
			},
			{
				"id": 17,
				"name": "Sgt Hammer",
				"thumbnail": "thumb-hammer.png",
				"heroRotation": false
			},
			{
				"id": 18,
				"name": "Sonya",
				"thumbnail": "thumb-sonya.png",
				"heroRotation": false
			},
			{
				"id": 19,
				"name": "Stitches",
				"thumbnail": "thumb-stitches.png",
				"heroRotation": false
			},
			{
				"id": 20,
				"name": "Tassadar",
				"thumbnail": "thumb-tassadar.png",
				"heroRotation": true
			},
			{
				"id": 21,
				"name": "Tychus",
				"thumbnail": "thumb-tychus.png",
				"heroRotation": false
			},
			{
				"id": 22,
				"name": "Tyrael",
				"thumbnail": "thumb-tyrael.png",
				"heroRotation": false
			},
			{
				"id": 23,
				"name": "Tyrande",
				"thumbnail": "thumb-tyrande.png",
				"heroRotation": false
			},
			{
				"id": 24,
				"name": "Uther",
				"thumbnail": "thumb-uther.png",
				"heroRotation": false
			},
			{
				"id": 25,
				"name": "Valla",
				"thumbnail": "thumb-valla.png",
				"heroRotation": false
			},
			{
				"id": 26,
				"name": "Zagara",
				"thumbnail": "thumb-zagara.png",
				"heroRotation": false
			},
			{
				"id": 27,
				"name": "Zeratul",
				"thumbnail": "thumb-zeratul.png",
				"heroRotation": true
			}
		],
		getHeroes : function() {
			return factory.heroes;
		},
		getHeroTalents : function( id ) {
			var talents = {};
			angular.forEach( factory.heroes, function( value, key ) {
				if( value.id == id ) {
					talents = value.talents;
				}
			} );
			return talents;
		}
	}
	return factory;
});




app.controller('HeroesCtrl', function($scope, HeroesFactory) {

	$scope.heroes = HeroesFactory.getHeroes();
	

});


app.controller('TalentsCtrl', function($scope, HeroesFactory, $routeParams ) {
	
	$scope.talents = HeroesFactory.getHeroTalents( $routeParams.id );

});