myApp.controller('chatController', ['$scope', function($scope, mySocket){
    mySocket.connect();
    $scope.users = [];
    $scope.messages = [];
    
    var promptUsername = function(message){
        bootbox.prompt(message, function(name){
            if(name != null){
                mySocket.emit('add-user', {username: name})
            }
            else {
                promptUsername('You must enter a username!');
            }
        })
    }
    
    $scope.sendMessage = function(msg){
        if(msg != null && msg != '')
            mySocket.emit('message', {message: msg})
        $scope.msg = '';
    }
    
    promptUsername("What is your name?");
    
    mySocket.emit('request-users', {});
    
    mySocket.on('users', function(data){
        $scope.users = data.users;
    });
    
    mySocket.on('message', function(data){
        $scope.messages.push(data);
    });
    
    mySocket.on('add-user', function(data){
        $scope.users.push(data.username);
        $scope.messages.push({username: data.username, message: 'has entered the channel'});
    });
    
    mySocket.on('remove-user', function(data){
        $scope.users.splice($scope.users.indexOf(data.username), 1);
        $scope.messages.push({username: data.username, message: 'has left the channel'});
    });
    
    mySocket.on('prompt-username', function(data){
        promptUsername(data.message);
    })
    
    $scope.$on('$locationChangeStart', function(event){
        mySocket.disconnect(true);
    })
}])