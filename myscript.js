const URL = "https://covid19.mathdro.id/api/countries/india";
var app = angular.module("myapp",[]);
app.controller("myctrl", ($scope, $http) => {

console.log("App loaded");

// calling api

$http.get(URL).then(
    (response) => {
        // suceess
        console.log(response.data);
        $scope.all_data = response.data;
    },
    (error) => {
        // error
        console.log(error);
    }
    );
});