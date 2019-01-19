const axios = require('axios');

const queryBuilder = function() {
  
}

/**
 * 
 * @param String url; desc: The url of the API request
 * @param {queryString: queryValue} queryParams 
 * @param Object data 
 */
const get = function(uri) {
  return axios.get(uri)
}

export default {
  get,
}
