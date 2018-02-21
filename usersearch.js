var myapp = angular.module('app', []);
    myapp.controller('gitHubDataController', ['$scope','$http', function($scope,$http)
{
console.log("js loaded");

        $scope.reposLoaded = false;

        $scope.userLoaded = false;

        $scope.username = "";
$scope.userData=[];
$scope.chunkedData=[];
$scope.userSearch = function(){
console.log($scope.username);
$http({
      method: 'GET',
      url: 'https://api.github.com/search/users?q='+$scope.username
   }).then(function (success){
   console.log('in success');
   
   $scope.userData=success;
   console.log('userdata',$scope.userData);
   //$scope.chunkedData = chunk($scope.userData.data.items, 3);
  
   },function (error){

   });
   };
  /*  function chunk(arr, size) {
  var newArr = [];
  for (var i=0; i<arr.length; i+=size) {
    newArr.push(arr.slice(i, i+size));
  }
  return newArr;
} */



   $scope.openModal = function(val){
console.log('in open modal',val);
$scope.id=val;

for(var i=0;i<$scope.userData.data.items.length;i++){
if($scope.id==$scope.userData.data.items[i].id){

				$http({
      method: 'GET',
      url: $scope.userData.data.items[i].repos_url
   }).then(function (data){
   console.log('in success');
   
    $scope.repoData = data;
   console.log('userdata',$scope.repoData);
   },function (error){

   });
}
}
   };

       /* $http.get("https://api.github.com/search/users?q=" + $scope.username)
            .success(function (data) {
                $scope.userData = data;
                loadRepos();
            }); */
 
    /*     var loadRepos = function () {
            $http.get($scope.userData.repos_url)
                .success(function (data) {
                    $scope.repoData = data;
                });
        }; */


        //$scope.predicate = '-updated_at';


}]);