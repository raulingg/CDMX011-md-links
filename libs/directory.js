import fs from 'fs';
import path from 'path';
import { toReadFile } from './file.js';


export const toReadDirectory=(pathFromCli)=>{
let filesMD=[];

    fs.readdir(pathFromCli, function callback (err, list){
        if (err) return console.error (err)
        list.forEach (file => {
            if (path.extname(file) == '.md') {
                //enviar nombres de files a array
                filesMD.push(pathFromCli+'\\'+file);
                
            }
            if(path.extname(file).length == 0){
                let carpeta;
                carpeta=(pathFromCli+'\\'+file);
                toReadDirectory(carpeta);
               
            }
         
      })
    //   console.log(filesMD)//objeto

      //llamar funcion para leer cada file
      filesMD.forEach(url =>{
          toReadFile(url)
      })
})
}

