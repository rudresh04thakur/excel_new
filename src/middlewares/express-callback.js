/**
 *
 * @param controller
 */
module.exports = (controller) => async (req, res) => {
  const httpRequest = {
    body: req.body,
    query: req.query,
    params: req.params,
    ip: req.ip,
    method: req.method,
    path: req.path,
    session: req.session,
    file: req.file,
    files: req.files,
    returnType: 'json',
    headers: {
      'Content-Type': req.get('Content-Type'),
      Authorization: req.get('Authorization'),
      Referer: req.get('referer'),
      'User-Agent': req.get('User-Agent'),
    },
  };
  const httpResponse = await controller(httpRequest);
  if (httpResponse.headers) res.set(httpResponse.headers);
  if (httpResponse.returnType == 'json') {
    return res.status(httpResponse.statusCode).send(httpResponse.data);
  } else if (httpResponse.returnType == 'redirect') {
    return res.redirect(httpResponse.path);
  } else {
    return res.render(httpResponse.path, {session:httpRequest.session,...httpResponse.options});
  }
};
