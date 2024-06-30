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
      if ([".mp3", ".m4a"].includes(dirent.name.slice(-4))) 
        if (![" 1.mp3", " 1.m4a"].includes(dirent.name.slice(-6))) 
        {
          // ensureDir(`${toDir}\\${dirent.name}`, err => {
          //   console.log(err)
          // });
          copy(`${dirent.path}\\${dirent.name}`, 
            `${toDir}\\${dirent.path.slice(sourceDir.length+1)}\\${dirent.name}`,
            err => {
              if (err !== null) console.log(err) 
            });
          // console.log(
          //   `${dirent.path}\\${dirent.name}`, 
          //   `${toDir}\\${dirent.path.slice(sourceDir.length+1)}\\${dirent.name}`
          // );
        }
  }
};

// dir("E:\\iTunes\\iTunes Media\\Music", "D:\\music");
dir("E:\\iTunes（170127タブレット）\\iTunes Media\\Music", "D:\\music2");

