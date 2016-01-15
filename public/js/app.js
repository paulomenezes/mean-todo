var app = angular.module("keep", ['ngMaterial']);

app.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default').primaryPalette('blue-grey').accentPalette('orange');
});

app.controller('KeepController', function ($scope, $http, $mdToast) {
	$scope.view = 'grade';
	$scope.completed = false;

	$scope.tarefas = [];

	$http.get('/api/tasks').then(function (resultado) {
		$scope.tarefas = resultado.data;
	}, function (erro) {
		console.log(erro);
	});

	$scope.nova = {
		title: '',
		description: '',
		completed: false
	};

	$scope.salvar = function () {
		$http.post('/api/tasks', $scope.nova).then(function (data) {
			$scope.nova._id = data.data.id;

			$scope.tarefas.push($scope.nova);

			$scope.nova = {
				title: '',
				description: '',
				completed: false
			}
		}, function (error) {
			console.log(error);
		})
	};

	$scope.concluir = function (tarefa) {
		tarefa.completed = true;
		$http.put('/api/tasks/' + tarefa._id, tarefa).then(function (resultado) {
			var toast = $mdToast.simple().textContent('Tarefa concluída!').action('Desfazer').highlightAction(true).hideDelay(5000);
			$mdToast.show(toast).then(function (response) {
				if (response == 'ok') {
					tarefa.completed = false;
					$http.put('/api/tasks/' + tarefa._id, tarefa).then(function (resultado) {
						
					}, function (erro) {
						console.log(erro);
					});
				}
			});
		}, function (erro) {
			console.log(erro);
		});
	}
})

