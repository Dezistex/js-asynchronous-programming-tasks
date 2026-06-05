import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

export const getDirectorySize = (dirpath, callback) => {
  fs.readdir(dirpath, (err, files) => {
    if (err) { callback(err); return; }
    const filepaths = files.map((f) => path.join(dirpath, f));
    async.map(filepaths, fs.stat, (err2, stats) => {
      if (err2) { callback(err2); return; }
      const size = _.sumBy(stats.filter((s) => s.isFile()), 'size');
      callback(null, size);
    });
  });
};
