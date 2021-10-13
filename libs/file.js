import { rejects } from 'assert';
import fs from 'fs';
import path, { resolve } from 'path';



export const toReadFile = (pathFromCli) => {
    let arr = [];
    //lee archivo con ext .md
    if (path.extname(pathFromCli) == '.md') {

        const content = fs.readFileSync(pathFromCli, 'utf8')
        // findUrl(content);
         return console.log(fs.readFileSync(pathFromCli, 'utf8'))

    } else {
        console.log('Extencion de archivo no valida');
    }
}


const findUrl = (content) => {
    console.log(typeof content)
    let texto="[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado ligero muy popular entre developers. Es usado en muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, ...), y es muy común";
     let expresion=/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

    // return console.log(texto.test(expresion))

}




