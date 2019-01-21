const axios = require('axios');
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
