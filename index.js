
import chalk from 'chalk';
import figlet from 'figlet'
import fs from 'fs';
import { toReadFile } from './libs/file.js';
import { absolutePath } from './libs/ruta.js';
import { toReadDirectory } from './libs/directory.js';
import {validateFalse, validateTrue, statusOption, statusAndValidate} from './libs/metricas.js';

const pathCli = absolutePath(process.argv[2]);
export const validateOrStats= process.argv[3];
// export const validateAndStats= process.argv[4];
// console.log(validateOrStats);
console.log(chalk.blue(figlet . textSync ( 'Md-Links' ,  { 
  font: 'Ghost',
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: 100,
  whitespaceBreak : true 
} ) ));

fs.stat(pathCli, (err, stats) => {
  if (err) {
    return console.log(err.message);
  }

  if (stats.isFile()) {
    // console.log('file')
    toReadFile(pathCli)
  } else if (stats.isDirectory()) {
    // console.log(path.basename(pathCli))
    toReadDirectory(pathCli);
  }
});

// mdLink();


// export const mdLink = (pathFromCli,data) => {
//   switch(validateOrStats){ 
                 
//     case '--validate:true':
//          validateTrue(pathFromCli,data)
//     break;

//     case '--validate:false':
//     validateFalse(pathFromCli,data);
//     break;

//     case '--stats':
//      statusOption(pathFromCli, data);
//     break;

//     case '--stats-validate':
//     statusAndValidate(pathFromCli,data);
//     break;

//     case '--validate-stats':
//      statusAndValidate(pathFromCli,data);
//     break;

//     default:
//     return console.log('Ingrese comando valido\n--validate:true\n--validate:false\n--stats \n--stats-validate \n--validate-stats');
//     break;
    
// }
// }