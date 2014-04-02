Package.describe({
  summary: "Fast n-dimensional filtering and grouping of records."
});

Package.on_use(function (api, where) {
  api.add_files('lib/crossfilter.js', ['client', 'server']);
});