angular.module("keep", ['ngMaterial'])
	.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('yellow')
			.accentPalette('orange');
});