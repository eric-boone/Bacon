(function () {
  'use strict';

  angular
    .module('jobs')
    .controller('JobsListController', JobsListController);

  JobsListController.$inject = ['JobsService'];

  function JobsListController(JobsService) {
    var vm = this;

    vm.jobs = JobsService.query();
  }
}());
