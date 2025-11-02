// Writing into a file

const fs = require("fs");

fs.writeFile("message.txt", "Hello from Node.Js!!!", (err) => {
  if (err) throw err;

  console.log("The file has been saved");
});
