const jwt = require("jsonwebtoken");
require("dotenv").config();

const tokenPrivateKey = process.env.JWT_TOKEN_PRIVATE_KEY;
const refreshTokenPrivateKey = process.env.JWT_REFRESH_PRIVATE_KEY;
const options = { expiresIn: "30 minutes" };
const refreshOptions = { expiresIn: "30 days" };

const generateJWT = (payload) => {
  return jwt.sign(payload, tokenPrivateKey, options);
};

const generateRefreshJWT = (payload) => {
  return jwt.sign(payload, refreshTokenPrivateKey, refreshOptions);
};

const verifyJwt = (token) => {
  return jwt.verify(token, tokenPrivateKey);
};

const verifyJwtRefresh = (token) => {
  return jwt.verify(token, refreshTokenPrivateKey);
};

const getTokenFromHeaders = (headers) => {
  let token = headers["authorization"];
  return (token = token ? token.slice(7, token.length) : null);
};

module.exports = {
  generateJWT,
  generateRefreshJWT,
  verifyJwt,
  verifyJwtRefresh,
  getTokenFromHeaders,
};
