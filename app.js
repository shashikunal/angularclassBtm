var myapp = angular.module("testApp" , ["ngRoute"]);


// route
myapp.config(function($routeProvider , $locationProvider){
    $routeProvider.when("/login" , {
        templateUrl:"/views/login.html"
    }).when("/register" , {
        templateUrl:"/views/register.html"
    }).otherwise({
        redirectTo:"/login"
    });

})





//controller
myapp.controller("myCtr" , function($scope){
    $scope.test
})