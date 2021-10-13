//consideracion si se pasa una carpeta no debe tener espacios su nombre
// import fs from 'fs';
import path from 'path';
import {toReadFile} from './libs/file.js'
import {absolutePath} from './libs/ruta.js'
import {toReadDirectory} from './libs/directory.js'


const pathCli=absolutePath(process.argv[2]);



if(path.extname(pathCli).length > 0){
    // console.log('es un file')
    // path.extname(pathCli) == '.txt'? toReadFile(pathCli) : console.log('Extencion de archivo no valida')
    toReadFile(pathCli)

  }else{
    // console.log(path.basename(pathCli))
    toReadDirectory(pathCli);
  }


  export const mdLink=()=>{

  }