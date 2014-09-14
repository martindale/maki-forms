module.exports = function(req, res, next) {
  var supportedMethods = ['patch'];

  var requestMethod  = req.param('method');
  var proposedMethod = ( requestMethod ) ? requestMethod.toLowerCase() : null;

  if (supportedMethods.indexOf( proposedMethod ) >= 0) {
    req.method = req.param('method').toUpperCase();
    // TODO: force use of req.body / req.params?
    // otherwise, form control seems to utilize query strings / request body
  }

  next();
}
