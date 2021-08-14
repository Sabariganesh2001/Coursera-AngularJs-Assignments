(function(){
    'use strict'
    let checker = function($scope){
        $scope.result = "";
        $scope.renderResult = function(){
            let givenList = $scope.inp_list.split(',').filter(Boolean);        
            $scope.result = givenList.length < 4 ? "Enjoy!" : "Too much!"; 
            $scope.result=="Enjoy!" ?  $(".message").removeClass("font-red").addClass("font-green") : $(".message").addClass("font-red").removeClass("font-green").addClass("font-red");                     
        } 
    }
    angular.module("Lunch Checker",[]).controller("LunchCheckerController",checker);   
    checker.$inject=['$scope'];   
})();