'use strict';

// Jobs controller
angular.module('jobs').controller('JobsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Jobs',
  function ($scope, $stateParams, $location, Authentication, Jobs) {
    $scope.authentication = Authentication;

    // Create new job
    $scope.create = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'jobForm');

        return false;
      }

      // Create new job object
      var job = new Jobs({
        job_title: this.job_title,
        job_description: this.job_description,
        job_requirements: this.job_requirements,
        job_rate: this.job_rate,
        job_location: this.job_location,
        job_notes: this.job_notes,
        job_link: this.job_link,
        company: this.company,
        company_notes: this.company_notes,
        contact_name: this.contact_name,
        contact_email: this.contact_email,
        contact_phone: this.contact_phone
      });

      // Redirect after save
      job.$save(function (response) {
        $location.path('jobs/' + response._id);

        // Clear form fields
        $scope.job_title = '';
        $scope.job_description = '';
        $scope.job_requirements = '';
        $scope.job_rate = '';
        $scope.job_location = '';
        $scope.job_notes = '';
        $scope.job_link = '';
        $scope.company = '';
        $scope.company_notes = '';
        $scope.contact_name = '';
        $scope.contact_email = '';
        $scope.contact_phone = '';

      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Remove existing job
    $scope.remove = function (job) {
      if (job) {
        job.$remove();

        for (var i in $scope.jobs) {
          if ($scope.jobs[i] === job) {
            $scope.jobs.splice(i, 1);
          }
        }
      } else {
        $scope.job.$remove(function () {
          $location.path('jobs');
        });
      }
    };

    // Update existing job
    $scope.update = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'jobForm');

        return false;
      }

      var job = $scope.job;

      job.$update(function () {
        $location.path('jobs/' + job._id);
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Find a list of Jobs
    $scope.find = function () {
      $scope.jobs = Jobs.query();
    };

    // Find existing job
    $scope.findOne = function () {
      $scope.job = Jobs.get({
        jobId: $stateParams.jobId
      });
    };
  }
]);
