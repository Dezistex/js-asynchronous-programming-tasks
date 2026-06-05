import fs from 'fs';

export const move = (from, to, callback) => {
  fs.readFile(from, (err, data) => {
    if (err) { callback(err); return; }
    fs.writeFile(to, data, (err2) => {
      if (err2) { callback(err2); return; }
      fs.unlink(from, (err3) => {
        callback(err3 || null);
      });
    });
  });
};
