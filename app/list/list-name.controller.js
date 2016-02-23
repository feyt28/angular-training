( function () {
	'use strict';

	function ListCtrl ( listFactory ) {
		var self = this;

		self.list = listFactory.getList;

		console.log( self.list );

		function deleteMdl ( model ) {
			self.list.splice( self.list.indexOf(model),1 );
			console.log(model);
		}

		self.deleteMdl = deleteMdl;
	}


	angular.module( 'app' )
		.controller( "ListCtrl", ListCtrl );

	ListCtrl.$inject = [ 'listFactory' ];

} )( );
