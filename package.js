Package.describe({
  summary: "Fast n-dimensional filtering and grouping of records.",
  version: "1.3.9",
  git: "https://github.com/pfafman/meteor-crossfilter.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom("METEOR@0.9.0");
  api.add_files('lib/crossfilter.js', ['client', 'server']);
});