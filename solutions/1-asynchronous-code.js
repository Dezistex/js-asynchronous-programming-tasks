import fs from 'fs';

const print = (filepath) => {
  fs.readFile(filepath, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
};

export default print;
