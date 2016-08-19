var login = angular.module('login', [])

	/*login.config (function ($routeProvider) {
	$routeProvider
    	.when('/',
    	{
		templateURL: 'index.html'
        })
		.when('/register.html',
	    {
		    templateURL: 'register.html'
		})
	    .when('/cart.html',
	    {
		   	templateURL: 'cart.html'
	    })
		.when('/products.html',
		{
		    templateURL: 'products.html'
	    })
	    .otherwise(
	    {
	       	redirectTo: '/'
		});
	})*/

		login.controller ('LoginCreds',

			logger = function ($scope)
			{
					Users =
				  	[
					    {Uname: 'sidhantgupta004', password: '123shop'},
					    {Uname: 'guptasidhant004', password: 'shopper345'},
					    {Uname: 'rohitC', password: '99shopper'},
						{Uname: 'admin', password: 'admin'}
				  	]

				  	c = 0
				  	for(i=0; i<Users.length; i++)
				    {
				    	if (Users[i].Uname == $scope.ID && Users[i].password == $scope.Pwd)
				     	{
				        	alert('Login Successful.')
				        	loggedIn = true
				        	c++
				      	}
				    }
				    
				   
			}
		)