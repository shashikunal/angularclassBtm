var myapp = angular.module("app" , ["ngRoute"]);



myapp.controller("testCtr" , function($scope , $timeout ,$interval){
$scope.message = "hello angularjs";
$timeout(function(){
    $scope.message = "hello nodejs";
},10000);



$scope.time = new Date().toLocaleTimeString();
$interval(function(){
    $scope.time = new Date().toLocaleTimeString();
},1000)

});





myapp.config(["$routeProvider" , "$locationProvider" , function($routeProvider , $locationProvider ){
    $routeProvider.when("/login" , {
        templateUrl : "/views/login.html"
    }).when("/register" , {
        templateUrl : "/views/register.html"
    }).otherwise({
        redirectTo:"/login"
    });
}]);



myapp.filter("shashi" , function(){
    return function(input , limit){
        if(isNaN(limit) || limit == " "){
           return input;
        }else {
        return input.substring(0 , limit ).toUpperCase();
        }
    }
});

myapp.controller("myCtr" , function($scope){
    $scope.users = [{
        firstname : "vinay",
        lastName : "kumar",
        Number : 20,
        company:"qspiders",
        salary:30000,
        designation:"web developer",
        dob : new Date('05-10/1990')
    },
    {
        firstname : "arun",
        lastName : "kumar",
        Number : 21,
        company:"jspiders",
        salary :20000,
        designation:"java developer",
        dob : new Date('05-10/1980')
    },
    {
        firstname : "manu",
        lastName : "kumar",
        Number : 25,
        company:"testyantra",
        salary :50000,
        designation:"node developer",
        dob : new Date('05-10/1970')
    },
    {
        firstname : "vinay",
        lastName : "kumar",
        Number : 20,
        company:"qspiders",
        salary:30000,
        designation:"web developer",
        dob : new Date('05-10/1990')
    },
    {
        firstname : "arun",
        lastName : "kumar",
        Number : 21,
        company:"jspiders",
        salary :20000,
        designation:"java developer",
        dob : new Date('05-10/1980')
    },
    {
        firstname : "manu",
        lastName : "kumar",
        Number : 25,
        company:"testyantra",
        salary :50000,
        designation:"node developer",
        dob : new Date('05-10/1970')
    }

]
});




