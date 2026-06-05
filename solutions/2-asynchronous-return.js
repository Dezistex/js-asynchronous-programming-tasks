import fs from 'fs';

const write = (filepath, data, callback) => {
  fs.writeFile(filepath, data, callback);
};

export default write;
