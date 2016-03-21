(function (app) {
  'use strict';

  app.registerModule('jobs', ['core']);// The core module is required for special route handling; see /core/client/config/core.client.routes
  app.registerModule('jobs.services');
  app.registerModule('jobs.routes', ['ui.router', 'jobs.services']);
}(ApplicationConfiguration));
