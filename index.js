const get = (req, paramName) => {
  if (!req) return false;
  if (req && req.body && req.body[paramName]) return req.body[paramName];
  if (req && req.query && req.query[paramName]) return req.query[paramName];
  return false;
};

module.exports = { get };