// function cacheService() {
//   let cache = {};
//   console.log('running cache service');

//   function set(key, value) {
//     console.log(value);
//     cache[key] = value;
//   }

//   function get(key) {
//     return cache[key];
//   }

//   return {
//     get,
//     set
//   }
// }

// module.exports = cacheService();


var cacheService = (function () {
  let instance;
  function init() {
    let cache = {};
    console.log('cache initialized');
    return {
      getCache(key) {
        console.log();
        return cache[key];
      },
      setCache(key, value) {
        cache[key] = value; 
      }
    };
  };

  return {
    getInstance () {
      if ( !instance ) {
        instance = init();
      }
      return instance;
    }
  };
})();

module.exports = cacheService;