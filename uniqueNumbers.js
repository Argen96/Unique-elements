import fsp from 'fs/promises';

async function uniqueValue(file){
 
 const importedFile = await fsp.readFile(file,'utf-8');
 const array = importedFile.split('\r\n');
 const uniqueArray = new Set(array);
 return uniqueArray;
}

export default uniqueValue
