import fs from 'fs';

const watch = (filepath, period, callback) => {
  let lastModified = Date.now();

  const id = setInterval(() => {
    fs.stat(filepath, (err, stats) => {
      if (err) {
        clearInterval(id);
        callback(err);
        return;
      }
      if (stats.mtimeMs > lastModified) {
        lastModified = stats.mtimeMs;
        callback(null);
      }
    });
  }, period);

  return id;
};

export default watch;
