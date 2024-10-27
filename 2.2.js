const fs = require('fs');
const path = require('path');

// directoryPath를 현재 파일의 상위 디렉토리로 설정
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
          // 디렉토리인 경우 하위 디렉토리를 재귀적으로 탐색
          printAllFiles(filePath);
        } else if (stats.isFile()) {
          // 파일인 경우 파일 경로를 출력
          console.log('File:', filePath);
        }
      });
    });
  });
}

// 시작 디렉토리에서 탐색 시작
printAllFiles(directoryPath);
