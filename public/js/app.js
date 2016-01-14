angular.module("keep", ['ngMaterial'])
	.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('blue-grey')
			.accentPalette('orange');
});