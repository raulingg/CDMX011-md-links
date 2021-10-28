import chalk from 'chalk';

export const validateFalse=(pathCli, data)=>{
    console.log(chalk.white.bgGray.bold('Analyzed path: '+pathCli));
    data.forEach(propiedad =>{
        return console.log(chalk.cyanBright.bold(propiedad.Path)+ ' '+ chalk.greenBright.bold(propiedad.Title)+' '+chalk.white.bold(propiedad.Url));
    })
}


export const validateTrue=(pathCli, data)=>{
    // console.log(chalk.magenta('RelativePAth'+'   ' + '[Url Name Text]'+'   '+ 'Url'+'   '+'Status code'+'   '+ 'Status text'))
   console.log(chalk.white.bgGray.bold('Analyzed path: '+pathCli));
    data.forEach(propiedad =>{
        let stats, statsText;
        statsText= propiedad.StatusText == 'OK'? statsText=chalk.green.bold(propiedad.StatusText) : statsText= chalk.red.bold(propiedad.StatusText);
        stats= propiedad.Status >= '200' && propiedad.Status <= '300 '? stats=chalk.green.bold(propiedad.Status) : stats= chalk.red.bold(propiedad.Status);
        return console.log(chalk.cyanBright.bold(propiedad.Path)+ ' '+chalk.greenBright.bold(propiedad.Title)+' '+chalk.white.bold(propiedad.Url) + ' '+  stats + ' ' + statsText);
    })
}

export const statusOption=(pathCli, data)=>{

    
    const arrayUniqueByKey = [...new Map(data.map(item =>
        [item.Url, item])).values()];
    //   console.log(arrayUniqueByKey)
  
   
    console.log(chalk.white.bold('Source path:'+ pathCli));
    console.log(chalk.black.bgBlue.bold('Unique paths:'+arrayUniqueByKey.length));
    console.log(chalk.black.bgCyan.bold('Repeated paths:'+(data.length-arrayUniqueByKey.length)));
    console.log(chalk.black.bgGreen.bold('Total:'+data.length ));

    //obj set que hace que no se repitan los elementos que contiene
}

export const statusAndValidate=(pathCli, data)=>{
        let broke;
    
   const broken =data.filter(fail =>fail.StatusText != 'OK').length;

    const arrayUniqueByKey = [...new Map(data.map(item =>
        [item.Url, item]))];

    data.forEach(propiedad =>{
        let stats, statsText;
        statsText= propiedad.StatusText == 'OK'? statsText=chalk.green.bold(propiedad.StatusText) : statsText= chalk.red.bold(propiedad.StatusText);
        console.log(chalk.cyanBright.bold(propiedad.Path)+ ' '+chalk.greenBright.bold( propiedad.Title)+' '+chalk.white.bold(propiedad.Url)+' '+ statsText );
    })
    console.log(chalk.white.bgGray.bold('Source path:'+ pathCli));
    console.log(chalk.black.bgCyan.bold('Unique paths:'+ arrayUniqueByKey.length));
    console.log(chalk.white.bgRedBright.bold('Broken paths: '+broken));
    console.log(chalk.black.bgGreen.bold('Total:'+data.length ));
}

