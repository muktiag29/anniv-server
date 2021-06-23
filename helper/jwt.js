const jwt = require("jsonwebtoken")

function generateToken(payload) {
  return jwt.sign(payload, "rahasia")
}

module.exports = {
  generateToken,
}