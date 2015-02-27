(function () {
	var app = angular.module('calificacionesModule');

	app.controller('calificacionesCtrl', ['$scope', 'CRUDUtils', 'calificaciones.context', function ($scope, CRUDUtils, context) {
			this.url = context;
			CRUDUtils.extendCtrl(this, $scope);
			this.fetchRecords();
                        this.riesgo=false;
                        this.nuevo=false;
                        this.listado=true;                        
                        
                        
                        
                        this.listarRiesgo = function ()
                        {
                            this.riesgo=!this.riesgo;
                            this.listado=!this.listado;
                            this.listaRiesgo=null;
                            
                        };
                        
                        
                        
		}]);
            
        
})();



 