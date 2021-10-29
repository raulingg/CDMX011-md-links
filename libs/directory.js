import fs from 'fs';
import path from 'path';
import { toReadFile } from './file.js';

export const toReadDirectory = (pathFromCli) => {
  let filesMD = []
  fs.readdir(pathFromCli, function callback(err, list) {
    if (err) return console.error(err)

    list.forEach(file => {
     
      if (path.extname(file) == '.md' || path.extname(file) == '.markdown' || path.extname(file) == '.mkdn' || path.extname(file) == '.mdown') {
        filesMD.push(pathFromCli + '\\' + file);//enviar nombres de files a array
      }
//ingnora otras extenciones 
           if (path.extname(file).length == 0) {//se realiza este if para que se asegure que es carpeta ya que si se coloca un else podrian caes los archivos con otra extencion
              let carpeta = (pathFromCli + '\\' + file);
              toReadDirectory(carpeta);
      }
    })
    //   console.log(filesMD)//objeto

    //   llamar funcion para leer cada file
    filesMD.forEach(url => {
      //   console.log(url)
      toReadFile(url)
    })
  })
}