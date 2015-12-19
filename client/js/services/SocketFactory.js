myApp.factory('mySocket', ['socketFactory', function(socketFactory){
    return socketFactory();
}]);