Package.describe({
  name: "nytamin:testnpm",
  summary: "test test",
  version: "0.0.1",
});


Npm.depends({
  "lodash": "git+https://github.com/lodash/lodash.git"
});


Package.onUse(function(api) {
  api.versionsFrom("1.0.1");

  // Dependencies
  api.use(["templating", "underscore"]);


  api.addFiles([
    
  ], ['client', 'server']);

});
