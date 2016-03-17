Package.describe({
  name: 'pfafman:crossfilter',
  summary: "Fast n-dimensional filtering and grouping of records.",
  version: "1.4.0_1",
  git: "https://github.com/pfafman/meteor-crossfilter.git"
});

// Npm.depends({
//   "crossfilter2": "2.0.0"
// });

Package.on_use(function (api, where) {
  api.versionsFrom("METEOR@1.0");
  api.add_files('lib/crossfilter.js', ['client']);
});