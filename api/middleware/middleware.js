
function logger(req, res, next) {
  const date = new Date().toLocaleString();
  const method = req.method;
  const url = req.originalUrl;
  console.log(`[${date}]: ${method} to ${url}`);
  next()
}

module.exports = logger;
