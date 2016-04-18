Package.describe({
  name: 'chriswessels:glyphicons-halflings',
  version: '2.1.0',
  summary: "This simple smart package adds the Glyphicon Halflings font-face to Meteor.",
  git: 'https://github.com/chriswessels/meteor-glyphicons-halflings.git'
});

Package.onUse(function (api){
  api.addAssets([
    'lib/glyphicons-halflings/fonts/glyphicons-halflings-regular.eot',
    'lib/glyphicons-halflings/fonts/glyphicons-halflings-regular.svg',
    'lib/glyphicons-halflings/fonts/glyphicons-halflings-regular.ttf',
    'lib/glyphicons-halflings/fonts/glyphicons-halflings-regular.woff'
  ], 'client');
  api.addFiles('lib/glyphicons-halflings/css/glyphicons.css', 'client');
});
