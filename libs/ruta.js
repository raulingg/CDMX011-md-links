
import path from 'path';

// let rute;
export const absolutePath=(pathFromCli)=>{
  let rute=0;
  return path.isAbsolute(pathFromCli) === true ? rute = pathFromCli : rute=path.resolve(pathFromCli);
  
}