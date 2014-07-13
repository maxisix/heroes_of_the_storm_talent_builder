var app = angular.module('app', ['ngRoute']);



app.config(function($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'partials/heroes.html', controller: 'HeroesCtrl'})
		.when('/hero_talents/:name', {templateUrl: 'partials/hero_talents.html', controller: 'TalentsCtrl'})
		.when('/build', {templateUrl: 'partials/build.html'})
		.otherwise({redirectTo: '/'})
});




app.factory('HeroesFactory', function() {
	var factory = {
		heroes : [
			{
				"name": "Abathur",
				"thumbnail": "thumb-abathur.png",
				"heroRotation": false,
				"talents": [
					{
						"lvl_1": {
							"skill_1": {
								"name": "asd",
								"description": "",
								"thumbnail": ""
							},
							"skill_2": {
								"name": "dsa",
								"description": "",
								"thumbnail": ""
							},
							"skill_3": {
								"name": "fds",
								"description": "",
								"thumbnail": ""
							},
							"skill_4": {
								"name": "fds",
								"description": "",
								"thumbnail": ""
							}
						}
					}
				]
			},
			{
				"name": "Arthas",
				"thumbnail": "thumb-arthas.png",
				"heroRotation": true
			},
			{
				"name": "Brightwing",
				"thumbnail": "thumb-brightwing.png",
				"heroRotation": false
			},
			{
				"name": "Diablo",
				"thumbnail": "thumb-diablo.png",
				"heroRotation": false
			},
			{
				"name": "Etc",
				"thumbnail": "thumb-etc.png",
				"heroRotation": false
			},
			{
				"name": "Falstad",
				"thumbnail": "thumb-falstad.png",
				"heroRotation": true
			},
			{
				"name": "Gazlowe",
				"thumbnail": "thumb-gazlowe.png",
				"heroRotation": false
			},
			{
				"name": "Ilidan",
				"thumbnail": "thumb-illidan.png",
				"heroRotation": false
			},
			{
				"name": "Kerrigan",
				"thumbnail": "thumb-kerrigan.png",
				"heroRotation": false
			},
			{
				"name": "Lili",
				"thumbnail": "thumb-lili.png",
				"heroRotation": false
			},
			{
				"name": "Malfurion",
				"thumbnail": "thumb-malfurion.png",
				"heroRotation": false
			},
			{
				"name": "Muradin",
				"thumbnail": "thumb-muradin.png",
				"heroRotation": true
			},
			{
				"name": "Murky",
				"thumbnail": "thumb-murky.png",
				"heroRotation": false
			},
			{
				"name": "Nazeebo",
				"thumbnail": "thumb-nazeebo.png",
				"heroRotation": true
			},
			{
				"name": "Nova",
				"thumbnail": "thumb-nova.png",
				"heroRotation": false
			},
			{
				"name": "Raynor",
				"thumbnail": "thumb-raynor.png",
				"heroRotation": false
			},
			{
				"name": "Sgt Hammer",
				"thumbnail": "thumb-hammer.png",
				"heroRotation": false
			},
			{
				"name": "Sonya",
				"thumbnail": "thumb-sonya.png",
				"heroRotation": false
			},
			{
				"name": "Stitches",
				"thumbnail": "thumb-stitches.png",
				"heroRotation": false
			},
			{
				"name": "Tassadar",
				"thumbnail": "thumb-tassadar.png",
				"heroRotation": true
			},
			{
				"name": "Tychus",
				"thumbnail": "thumb-tychus.png",
				"heroRotation": false
			},
			{
				"name": "Tyrael",
				"thumbnail": "thumb-tyrael.png",
				"heroRotation": false
			},
			{
				"name": "Tyrande",
				"thumbnail": "thumb-tyrande.png",
				"heroRotation": false
			},
			{
				"name": "Uther",
				"thumbnail": "thumb-uther.png",
				"heroRotation": false
			},
			{
				"name": "Valla",
				"thumbnail": "thumb-valla.png",
				"heroRotation": false
			},
			{
				"name": "Zagara",
				"thumbnail": "thumb-zagara.png",
				"heroRotation": false
			},
			{
				"name": "Zeratul",
				"thumbnail": "thumb-zeratul.png",
				"heroRotation": true
			}
		],
		getHeroes : function() {
			return factory.heroes;
		},
		getHeroTalents : function(name) {
			return factory.heroes[0].talents;
		}
	}
	return factory;
});




app.controller('HeroesCtrl', function($scope, HeroesFactory) {

	$scope.heroes = HeroesFactory.getHeroes();
	

});


app.controller('TalentsCtrl', function($scope, HeroesFactory) {

	$scope.talents = HeroesFactory.getHeroTalents();

});