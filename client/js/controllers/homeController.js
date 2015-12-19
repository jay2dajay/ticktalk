myApp.controller('homeController', ['$scope', function($scope){
    $scope.myInterval = 4000;
    $scope.slides = [{
        image: "img/2.jpeg",
    },
    {
        image: "img/3.jpeg",
    },
    {
        image: "img/4.jpg",
    },
    {
        image: "img/5.jpeg",
    }    ];
}]);