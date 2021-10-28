import  fetch from "node-fetch";

export const htttpRequest=(urls)=>{//retornara una promesa
  
    return new Promise ((resolve, reject)=>{
        const allUrlInfo= urls.map(objectToAnalice => {
            return  fetch(objectToAnalice.Url)
            .then( (response) =>{
                objectToAnalice.Status=response.status;
                objectToAnalice.StatusText=response.statusText;
            })
            .catch(()=>{
                reject(new Error('Revise su conexión a internet'))
            })
        })
   
    Promise.all(allUrlInfo)
    .then(()=>resolve(urls))
    .catch(()=>{
        reject(new Error('No se analizaron los URL'))
    })
 })
    

}
