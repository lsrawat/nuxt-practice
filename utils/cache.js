const LRU = require("lru-cache")
  , options = {
    max: 500000
    , maxAge: 1000 * 60 * 60
  }
  , cache = new LRU(options);

exports.set = function (key, value) {
  cache.set(key, value);
}

exports.get = function (key) {
  return cache.get(key);
}