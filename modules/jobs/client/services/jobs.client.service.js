(function () {
  'use strict';

  angular
    .module('jobs.services')
    .factory('JobsService', JobsService);

  JobsService.$inject = ['$resource'];

  function JobsService($resource) {
    return $resource('api/jobs/:jobId', {
      jobId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
}());
