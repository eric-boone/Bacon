'use strict';

// Configuring the Jobs module
angular.module('jobs').run(['Menus',
  function (Menus) {
    // Add the jobs dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Jobs',
      state: 'jobs',
      type: 'dropdown'
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'jobs', {
      title: 'List Jobs',
      state: 'jobs.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'jobs', {
      title: 'Create Jobs',
      state: 'jobs.create'
    });

    // Add the dropdown view item
    Menus.addSubMenuItem('topbar', 'jobs', {
      title: 'View Jobs',
      state: 'jobs.view'
    });

    // Add the dropdown edit item
    Menus.addSubMenuItem('topbar', 'jobs', {
      title: 'Edit Jobs',
      state: 'jobs.edit'
    });
  }
]);
