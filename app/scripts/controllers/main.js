'use strict';

/**
 * @ngdoc function
 * @name proyectoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the proyectoApp
 */
angular.module('proyectoApp')
  .controller('MainCtrl', function () {
  	var vm = this;

    vm.tareas = [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ];

   	vm.addTarea = function(){
   		vm.tareas.push(vm.nuevaTarea);
   		vm.nuevaTarea = "";
   	};

   	vm.eliminarTarea = function(index){
   		vm.tareas.splice(index,1);
   	};

  });
