angular.module('testService', [])//Declaramos el modulo
	.factory('testRequest', function($http) { //declaramos la factory

		path = 'https://35.158.198.88/wp-json/wp/v2/posts'
		return  {
			//primer boton
            posts : function(){ //Retornara la lista de notas
                
                global = $http.get(path);
                console.log(global);
                return global;
                    
           
            
			},//segundo boton
			post : function(id){ //retornara la nota por el id
				global = $http.get(path+'notas/'+id);
				return global;	
			}	
		}
	});