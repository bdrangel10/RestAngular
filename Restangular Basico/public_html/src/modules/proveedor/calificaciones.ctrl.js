(function () {
	var app = angular.module('calificacionesModule');

	app.controller('calificacionesCtrl', ['$scope', 'CRUDUtils', 'calificaciones.context', function ($scope, CRUDUtils, context) {
			this.url = context;
			CRUDUtils.extendCtrl(this, $scope);
			this.fetchRecords();
                        
                        this.masGente = function (){
                            this.riesgoMode = true;
                            this.editMode = false;
                            $scope.masGente = "Ninguno";
                            var actual = 0;
                            angular.forEach($scope.records, function (record){
                                if(record.people > actual){
                                    actual = record.people;
                                    $scope.masGente = record.name; 
                                }
                            });};
                        
		}]);
            
        
})();



 