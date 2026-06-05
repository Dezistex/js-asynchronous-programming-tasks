import fsp from 'fs/promises';

export const reverse = (filepath) =>
  fsp.readFile(filepath, 'utf-8').then((content) => {
    const reversed = content.split('\n').reverse().join('\n');
    return fsp.writeFile(filepath, reversed);
  });
