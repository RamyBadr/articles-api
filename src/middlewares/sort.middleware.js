function sortMiddleware (req, res, next) {
  const { sort } = req.query
  if (!sort || sort.length==0) {
    req.query.sort = { _id: -1 }
    return next()
  }
  if (sort[0] === '-') {
    req.query.sort = { [sort.substring(1)]: -1 }
  } else {
    req.query.sort = { [sort]: -1 }
  }
  return next()
}

module.exports = sortMiddleware
