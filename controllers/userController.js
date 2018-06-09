enrocoHack.controller('universityController', function($scope,shareData) {
    //console.log('inside university controller');
    //console.log(shareData);
    var universityName = 'University: Jain’s University, Calicut';
    var personal = 'About Family: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English.'
    var plans = 'Future Plans: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English.'

    var userInfo =   universityName  + '<br>' + personal + '<br>' + plans;
    shareData.setValue(userInfo);

    
});

enrocoHack.controller('userController', function($scope,$timeout, $http,shareData) {
   //console.log(shareData);
    $http.get("https://jsonblob.com/api/jsonBlob/a2bf2ce6-629f-11e8-a510-616c92e1bafd").then(function (response) {
      $scope.myData = response.data;
     
  });

    $timeout(function(){
    $scope.getUserInfo = shareData.getValue();
    console.log($scope.getUserInfo);
    },3000);
    

    $scope.myUser = false;
    $scope.showUser = function() {
        $scope.myUser = !$scope.myUser;
    };
});

enrocoHack.service('shareData', function(){

    var temp = '';
    this.setValue = function(data){
    //console.log(data,data1,data2);
    temp = data;
    // temp1 = data1;
    // temp2 = data2;
    }
    this.getValue = function(){
    //console.log(temp2);
    return temp;
    return temp1;
    return temp2;
    }
});










