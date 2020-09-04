const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
  host: "localhost",
  user: "root",
  password: "",
  database: "stackov"
};

let addUser = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  let sql =
    "INSERT INTO REGISTER (uname,email,passw) VALUES (?, ?, ?)";
  await connection.queryAsync(sql, [
    input.uname,
    input.email,
    input.passw
  ]);

  await connection.endAsync();
};

let authenticateUser = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  let sql = "SELECT * FROM REGISTER WHERE email =? AND passw=?";
  const results = await connection.queryAsync(sql, [
    input.email,
    input.passw,
  ]);

  await connection.endAsync();

  if (results.length === 0) {
    throw new Error("Invalid Credentials");
  }
};
let addquestion = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  let sql = "insert into Question(ques,description) values(?,?)";
  const results = await connection.queryAsync(sql, [
    input.ques,
    input.description
  ]);

  await connection.endAsync();

  if (results.length === 0) {
    throw new Error("Invalid Credentials");
  }
};


module.exports = { addUser, authenticateUser,addquestion };
