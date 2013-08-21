!function() {
  if (!window.console) window.console = {};
  var m = ["log", "info", "warn", "error", "debug", "trace", "dir", "group", "groupCollapsed", "groupEnd", "time", "timeEnd", "profile", "profileEnd", "dirxml", "assert", "count", "markTimeline", "timeStamp", "clear"];
  for (var i = 0; i < m.length; i++) {
    if (!window.console[m[i]]) window.console[m[i]] = function() {};
  }
}();
