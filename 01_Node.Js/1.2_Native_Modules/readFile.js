const fs = require("fs");

fs.readFile("message.txt", "utf8", (err, data) => {
  // "utf8" enocoding
  // If no encoding is specified, then the raw buffer is returned.

  // No Encoding Result - <Buffer 48 65 6c 6c 6f 20 66 72 6f 6d 20 4e 6f 64 65 2e 4a 73 21 21 21>
  // Encoding Result - Hello from Node.Js!!!
  if (err) throw err;

  console.log(data);
});
