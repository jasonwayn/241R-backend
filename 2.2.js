const fs = require('fs');
const path = require('path');


const directoryPath = path.dirname(__dirname);

function printAllFiles(directory) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(directory, file);

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error('Error reading file stats:', err);
          return;
        }

        if (stats.isDirectory()) {
          printAllFiles(filePath);
        } else if (stats.isFile() && file.endsWith('.js')) {
          console.log('File:', filePath);
        }
      });
    });
  });
}

printAllFiles(directoryPath);
