const {readFile,writeFile} = require('fs');

function getText(path){
    return new Promise((resolve, reject) => {
        readFile(path,"utf8",(err,data) =>{
            if(err){
                reject(err)
            }
            else{
                resolve(data);
            }
        })
    })
}
getText('./contents/filew1.txt')
    .then(result => console.log(result))
    .catch(err => console.log(err));