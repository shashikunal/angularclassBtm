const app = angular.module("myApp" , []);



app.controller("myCtr" , function($scope , $http){
    $http.get("https://api.github.com/users").then(function(item){
        $scope.gituser = item.data;
    });


    // $scope.removeItem = function(user){
    //     var removedItem =  $scope.gituser.indexOf(user);
    //     $scope.gituser.splice(removedItem , 1)

    // }

 $scope.removeItem = function(x){
      var removedata = $scope.gituser.indexOf(x);
      $scope.gituser.splice(removedata , 1)
    }

});