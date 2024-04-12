/**
 * utility function can reuse
 * created by : Risyandi
 * 2021
 */
const jwt = require("jsonwebtoken");

exports.utils = {
  getAuthUser(req) {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      const theToken = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(theToken, "the-super-strong-secret");

      return decoded.user_id;
    }

    return null;
  },
};
