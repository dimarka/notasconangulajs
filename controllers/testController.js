angular.module('myApp', ['testService']);

angular.module('myApp').controller('testController', ['$scope','testRequest',testController]);
function testController($scope, testRequest) {
	

    //primer boton
	$scope.getAllPosts = function(){
        $scope.posts=[];
        testRequest.posts().then(function (data){
            
            $scope.postse=data.data.documents; // Asignaremos los datos del post
            console.log("datos",$scope.postse);
			$scope.Pexist=1;
		});
        $scope.Pexist=1; 
    }
    //segundo boton
	$scope.getPost = function(){
		$scope.unPost={};
		testRequest.post($scope.post_id).success(function (data){
			$scope.unPost=data; // Asignaremos los datos del post
			$scope.unPost.exist=1;
			$scope.Pexist=2;
		});
	}
}