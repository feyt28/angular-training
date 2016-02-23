( function () {
	'use strict';

	//@ - string
	//= - object, function, boolean
	//& - function
	//A - attribute
	//C - class
	//E - element

	// function link ( scope ) {

	// 	function increment () {
	// 		scope.name.count++;
	// 	}

	// 	scope.increment = increment;

	// }

	function nameItems() {
		return {
			'scope': {
				'name'      : '=', //string
				'deleteMdl' : '='
			},
			'templateUrl'      : '/main/name-template.html',
			// 'link'          : link,
			'controller'       : 'nameItemsCtrl',
			'controllerAs'     : 'vm',
			'restrict'         : 'A',
			'bindToController' : true
		};
	}

	angular.module( 'app' )
		.directive( 'nameItems', nameItems );

} )( );
