myApp.controller('homeController', ['$scope', function($scope){
    $scope.myInterval = 4000;
    $scope.slides = [{
        image: "img/2.jpeg",
        link: "https://www.youtube.com/playlist?list=PLZm85UZQLd2SFY1lOEUNgplCyFpAQGo9D"
    },
    {
        image: "img/3.jpeg",
        link: "https://www.youtube.com/playlist?list=PLZm85UZQLd2SFY1lOEUNgplCyFpAQGo9D"
    },
    {
        image: "img/4.jpg",
        link: "https://www.youtube.com/playlist?list=PLZm85UZQLd2SFY1lOEUNgplCyFpAQGo9D"
    },
    {
        image: "img/5.jpeg",
        link: "https://www.youtube.com/playlist?list=PLZm85UZQLd2SFY1lOEUNgplCyFpAQGo9D"
    }    ];
}]);