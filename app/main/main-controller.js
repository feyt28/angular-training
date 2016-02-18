( function () {
	'use strict';

	function MainCtrl ( ) {
		var self = this;

		self.name    = 'faith';
		self.nameArr = [ 'faith', 'gomez' ];
		self.addName = '';

		var config = {
			'name'    : 'John Doe',
			'email'   : 'john.doe@mail.com',
			'friends' : [
				{
					'name' : 'Peter',
					'id'   : '122-ad-001'
				},
				{
					'name' : 'Peter',
					'id'   : '122-ad-001'
				},
				{
					'name' : 'Peter',
					'id'   : '122-ad-001'
				},
				{
					'name' : 'Peter',
					'id'   : '122-ad-001'
				}
			],
			'enemies' : []
		},

		function addNameFn () {
			self.nameArr.push( self.addName );
		}

		console.log( config );

	}

	angular.module( 'app' )
		.controller( 'MainCtrl', MainCtrl );

} )();
