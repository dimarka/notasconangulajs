angular.module('testService', [])//Declaramos el modulo
	.factory('testRequest', function($http) { //declaramos la factory

		path = 'http://dzdigital.co/prueba/wp-json/wp/v2/notas/'
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