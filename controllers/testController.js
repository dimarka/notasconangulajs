angular.module('myApp', ['testService']);

angular.module('myApp').controller('testController', ['$scope','testRequest',testController]);

var app = angular.module('myApp', '');
 app.filter('removehtml', function() {
	return function(text) {
		return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
	};
});


function testController($scope, testRequest) {

$scope.posts={};

    //primer boton
	$scope.getAllPosts = function(){
       
        testRequest.posts().then(function (data){
            $scope.posts=data.data; // Asignaremos los datos del post
            console.log("datos",$scope.posts);
			$scope.Pexist=1;
		});
        $scope.Pexist=1; 
    }
}