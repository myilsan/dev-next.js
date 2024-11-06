//$ npm install dotenv --> otenv 모듈은 Node.js 프로젝트에서 환경 변수를 관리하는 데 사용되는 간단하고 유용한 라이브러리입니다.

require("dotenv").config();

const oracledb = require("oracledb");

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectString: process.env.DB_CONNECT_STRING,
};

module.exports = config;
