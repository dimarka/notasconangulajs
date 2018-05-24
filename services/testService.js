angular.module('testService', [])//Declaramos el modulo
	.factory('testRequest', function($http) { //declaramos la factory

		path = 'https://firestore.googleapis.com/v1beta1/projects/notas-609ff/databases/(default)/documents/'
		return  {
			//primer boton
            posts : function(){ //Retornara la lista de notas
                
                global = $http.get(path+'notas');
                console.log(global);
                return global;
                    
           
            
			},//segundo boton
			post : function(id){ //retornara la nota por el id
				global = $http.get(path+'notas/'+id);
				return global;	
			}	
		}
	});