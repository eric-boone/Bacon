(function () {
  'use strict';

  angular
    .module('jobs')
    .controller('JobsController', JobsController);

  JobsController.$inject = ['$scope', '$state', 'jobResolve', '$window', 'Authentication'];

  function JobsController($scope, $state, job, $window, Authentication) {
    var vm = this;

    vm.job = job;
    vm.authentication = Authentication;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing Article
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.job.$remove($state.go('jobs.list'));
      }
    }

    // Save Article
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.jobForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.job._id) {
        vm.job.$update(successCallback, errorCallback);
      } else {
        vm.job.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('jobs.view', {
          jobId: res._id
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
}());
