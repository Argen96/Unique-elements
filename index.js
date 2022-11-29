


import fsp from 'fs/promises';

async function uniqueValue(file){
 const importedFile= await fsp.readFile(file,'utf-8')
 const array = importedFile.split('\r\n');
 console.log(array)
 const uniqueArray= new Set(array);
 return uniqueArray;
}

console.log(await uniqueValue('file.unique'));


