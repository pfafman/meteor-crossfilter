Package.describe({
  name: 'pfafman:crossfilter',
  summary: "Fast n-dimensional filtering and grouping of records.",
  version: "1.3.12",
  git: "https://github.com/pfafman/meteor-crossfilter.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom("METEOR@1.0");
  api.add_files('lib/crossfilter.js', ['client', 'server']);
});