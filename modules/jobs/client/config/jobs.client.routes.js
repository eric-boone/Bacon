(function () {
  'use strict';

  angular
    .module('jobs.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('jobs', {
        abstract: true,
        url: '/jobs',
        template: '<ui-view/>'
      })
      .state('jobs.list', {
        url: '',
        templateUrl: 'modules/jobs/client/views/list-jobs.client.view.html',
        controller: 'JobsListController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Jobs List'
        }
      })
      .state('jobs.create', {
        url: '/create',
        templateUrl: 'modules/jobs/client/views/form-job.client.view.html',
        controller: 'JobsController',
        controllerAs: 'vm',
        resolve: {
          jobResolve: newJob
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Jobs Create'
        }
      })
      .state('jobs.edit', {
        url: '/:jobId/edit',
        templateUrl: 'modules/jobs/client/views/form-job.client.view.html',
        controller: 'JobsController',
        controllerAs: 'vm',
        resolve: {
          jobResolve: getJob
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Edit Job {{ jobResolve.title }}'
        }
      })
      .state('jobs.view', {
        url: '/:jobId',
        templateUrl: 'modules/jobs/client/views/view-job.client.view.html',
        controller: 'JobsController',
        controllerAs: 'vm',
        resolve: {
          jobResolve: getJob
        },
        data: {
          pageTitle: 'Job {{ jobResolve.title }}'
        }
      });
  }

  getJob.$inject = ['$stateParams', 'JobsService'];

  function getJob($stateParams, JobsService) {
    return JobsService.get({
      jobId: $stateParams.jobId
    }).$promise;
  }

  newJob.$inject = ['JobsService'];

  function newJob(JobsService) {
    return new JobsService();
  }
}());
