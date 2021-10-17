//consideracion si se pasa una carpeta no debe tener espacios su nombre
import fs from 'fs';
import {toReadFile} from './libs/file.js'
import {absolutePath} from './libs/ruta.js'
import {toReadDirectory} from './libs/directory.js'


const pathCli=absolutePath(process.argv[2]);


   fs.stat(pathCli, (err, stats)=>{
    if(err){
        return console.log(err.message);
    }
  
    if(stats.isFile()){
      console.log('file')
      toReadFile(pathCli)
    }else if(stats.isDirectory()){
      // console.log(path.basename(pathCli))
     toReadDirectory(pathCli);
    }
  
  });

  export const mdLink=()=>{

  }