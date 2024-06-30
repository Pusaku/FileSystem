import { readdir, ensureDir, copy } from "fs-extra";

// 指定したディレクトリ配下のエントリの情報が全部返る
// 画像を処理したいなら後は拡張子で filter などすればよい

const dir = async (sourceDir: string, toDir: string) => {
  const files = await readdir(sourceDir, {
    withFileTypes: true,
    recursive: true,
  });
  for (const dirent of files) {
    if (!dirent.isDirectory()) 
      if ([".wav"].includes(dirent.name.slice(-4))) 
        {
          copy(`${dirent.path}\\${dirent.name}`, 
            `${toDir}\\${dirent.path.slice(sourceDir.length+1)}\\${dirent.name}`,
            err => {
              if (err !== null) console.log(err) 
            });
        }
  }
};

dir("E:\\iTunes\\iTunes Media\\Music", "C:\\Users\\yusak\\Desktop\\wav");

