const express = require("express");
const app = express();
const socket = require("socket.io");
const cors = require("cors");
var mysql = require("mysql");

app.use(express());

const port = 8000;

app.use(cors());

var server = app.listen(
  port,
  console.log(`Server is running on the port no: ${port} `)
);

const io = socket(server);

/* var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "whatsappclonedb",
  charset: "utf8mb4",
});

connection.connect(); */

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

//initializing the socket io connection
io.on("connection", (socket) => {
  socket.on("joinUser", ({ userId }) => {
    addUser(userId, socket.id);
    console.log(socket.id);
  });
  console.log(socket.id);

  /* socket.on("registerUser", ({ name, number }) => {
    var stmtSelectUser = `SELECT * FROM users WHERE number = ?`;
    var selectUserValues = [number];

    connection.query(
      stmtSelectUser,
      selectUserValues,
      function (error, results, fields) {
        if (error) throw error;

        if (results.length === 1) {
          console.log("User exist do not do anything");
        } else {
          var stmtRegisterUser = `INSERT INTO users (name, number) VALUES (?,?)`;
          var registerUserValues = [name, number];

          connection.query(
            stmtRegisterUser,
            registerUserValues,
            function (error, results, fields) {
              if (error) throw error;
              console.log(results);
            }
          );
        }
      }
    );
  }); */

  /* socket.on("getUsers", (data) => {
    var stmtSelectUsers = `SELECT * FROM users`;
    connection.query(stmtSelectUsers, [], function (error, results, fields) {
      if (error) throw error;
      io.emit("getUsers", results);
    });
  }); */

  socket.on("sendMessageFromClient", (data) => {
    let { messages, receiverId } = data;

    let getUserData = getUser(receiverId);
    console.log(users);
    console.log(getUserData);
    let socketId = getUserData.socketId;
    console.log(socketId);
    io.to(socketId).emit("sendMessageFromServer", messages);
  });

  socket.on("disconnect", () => {
    removeUser(socket.id);
    //io.emit("getUsers", users);
  });
});
