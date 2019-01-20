const cache = require('../utils/cache').getInstance();

export default function (req, res, next) {
  console.log('in server middleware cache')
  console.log(req.url);
  // console.log(cache);
  let renderedHTML = cache.getCache(String(req.url));
  console.log("renderedHTML")
  console.log(renderedHTML);
  if (renderedHTML) {
    console.log('in rendered html');
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(res.statusCode);
    res.write(data);
    res.end();
  }
  next();
}