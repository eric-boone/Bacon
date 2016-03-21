(function () {
  'use strict';

  angular
    .module('jobs')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    Menus.addMenuItem('topbar', {
      title: 'Jobs',
      state: 'jobs',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'jobs', {
      title: 'List Jobs',
      state: 'jobs.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'jobs', {
      title: 'Create Job',
      state: 'jobs.create',
      roles: ['user']
    });
  }
}());
