Package.describe({
	summary: "This simple smart package adds the Glyphicon Halflings font-face to Meteor."
});

Package.on_use(function (api){
  api.add_files('lib/glyphicons-halflings/fonts/glyphicons-halflings-regular.eot', 'client');
  api.add_files('lib/glyphicons-halflings/fonts/glyphicons-halflings-regular.svg', 'client');
  api.add_files('lib/glyphicons-halflings/fonts/glyphicons-halflings-regular.ttf', 'client');
  api.add_files('lib/glyphicons-halflings/fonts/glyphicons-halflings-regular.woff', 'client');
	api.add_files('lib/glyphicons-halflings/css/glyphicons.css', 'client');
});
