
import path from 'path';

let rute;
export const absolutePath=(pathFromCli)=>{
  // let rute;
  return path.isAbsolute(pathFromCli) === true ? rute= pathFromCli : rute=path.resolve(pathFromCli);
  
}


// if(path.extname(rute).length > 0){
//   console.log('es un file')
// }else{
//   console.log(path.basename(rute))
//   console.log('es una carpeta')
// }

// fs.stat(rute, (err, stats)=>{
//     if(err){
//         return console.log(err.message);
//     }
//   //  console.log(stats) //detalles del archivo
//     console.log(stats.isFile());
//     console.log(stats.isDirectory());

// //console.log(path.resolve(rute))
// // console.log(__filename)
// })
//revisar su extencion


//si es una carpeta abrirla y filtrar archivos con ext md