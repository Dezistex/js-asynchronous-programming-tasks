import fsp from 'fs/promises';

export const exchange = async (path1, path2) => {
  const [content1, content2] = await Promise.all([
    fsp.readFile(path1, 'utf-8'),
    fsp.readFile(path2, 'utf-8'),
  ]);
  await Promise.all([
    fsp.writeFile(path1, content2),
    fsp.writeFile(path2, content1),
  ]);
};
