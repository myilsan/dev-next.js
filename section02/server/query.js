const oracledb = require("oracledb");
const config = require("./db.config"); // 설정 파일 가져오기

async function executeQuery(sql) {
  let connection;
  try {
    connection = await oracledb.getConnection(config);
    const result = await connection.execute(sql);
    return result.rows;
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

module.exports = { executeQuery };
