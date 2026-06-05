import fs from 'fs';

export const compareFileSizes = (filepath1, filepath2, callback) => {
  fs.stat(filepath1, (err1, stat1) => {
    if (err1) { callback(err1); return; }
    fs.stat(filepath2, (err2, stat2) => {
      if (err2) { callback(err2); return; }
      callback(null, Math.sign(stat1.size - stat2.size));
    });
  });
};
