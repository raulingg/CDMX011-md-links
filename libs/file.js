
import fs from 'fs';
import path from 'path';


export const toReadFile = (pathFromCli) => {
    const pathExt = path.extname(pathFromCli);
    //lee archivo con ext .md

    if (pathExt == '.md' | pathExt == '.markdown' | pathExt == '.mkdn' | pathExt == '.mdown') {

        const content = fs.readFileSync(pathFromCli, 'utf8')
        // console.log(pathFromCli)
        findUrl(pathFromCli, content);
        //  return console.log(fs.readFileSync(pathFromCli, 'utf8'))

    } else {
        console.log('Extencion de archivo no valida');
    }
}



const findUrl = (pathFromCli, content) => {
    let urlToAnalise = [];
    let marckdownUlr = /\[(.*)\]\((https?)\:\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?\)/gi;
    let urlTittle = /\[(.*)\]/gi;//obtener title 
    let urlPath = /(https?)\:\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi;//obtener path

    let getUrl = content.match(marckdownUlr);

    if (getUrl !== null) {
        getUrl.forEach(elementos => {
            let urlObject = {};
            urlObject['Title'] = elementos.match(urlTittle).toString();
            urlObject['Url'] = elementos.match(urlPath).toString();
            urlObject['path'] = pathFromCli;
            
            urlToAnalise.push(urlObject);
            
        })

        return urlToAnalise
    }

}

const htmlRequest = () => {

}



