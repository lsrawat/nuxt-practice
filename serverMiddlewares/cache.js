const cache = require('../utils/cache');

export default function (req, res, next) {
  console.log('in server middleware cache')
  console.log(req.url);
  let renderedHTML = cache.get(String(req.url));
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