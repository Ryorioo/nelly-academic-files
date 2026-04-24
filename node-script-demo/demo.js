const fs = require('fs');

const content = `Hello from Node.js!
This file was created using the built-in fs module.
Date: ${new Date().toLocaleString()}`;

const filename = 'message.txt';

fs.writeFile(filename, content, { flag: 'w' }, (err) => {
  if (err) {
    console.error(`Error writing file: ${err.message}`);
    return;
  }
  console.log(`"${filename}" was created successfully!`);

  fs.readFile(filename, 'utf8', (readErr, data) => {
    if (readErr) {
      console.error(`Error reading file: ${readErr.message}`);
      return;
    }
    console.log('\nFile contents:');
    console.log(data);
  });
});
