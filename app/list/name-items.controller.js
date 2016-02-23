( function () {
	'use strict';

	function nameItemsCtrl () {
		var self = this;

		self.edit = false;

		self.nameCopy = angular.copy( self.name );
	}

	angular.module( 'app' )
		.controller( 'nameItemsCtrl', nameItemsCtrl );

} )( );
