
enrocoHack.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('home',{
			url: '/home',
			controller : 'userController',
			templateUrl : 'templates/home.html'
		
	});
	
	
	$urlRouterProvider.otherwise('/home');
 });


	$(document).ready(function(){
		$('.userProfile').click(function(){
			$('.arrowBox').slideToggle("slow");
		});
	});

	
