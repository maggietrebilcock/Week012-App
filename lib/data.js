import fs from 'fs';
import path from 'path';

// get filepath to data directory
const dataDir = path.join(process.cwd(), 'data');
// const dataDirTwo =path.join(process.cwd(), 'data' );
// function returns ids for all json objects in array
export function getAllIds() {
  // get filepath to json file
  const filePath = path.join(dataDir, 'persons.json');
  // load json file contents
  const jsonString = fs.readFileSync(filePath, 'utf8');
  // convert string from file into json array object
  const jsonObj = JSON.parse(jsonString);
  // use map() on array to extract just id properties into new array of obj values
  const filePath2 = path.join(dataDir, 'persons2.json');
  const jsonString2 = fs.readFileSync(filePath2, 'utf8');
  const jsonObj2 = JSON.parse(jsonString2);
  const allJsonObj = jsonObj.concat(jsonObj2);

  return allJsonObj.map(item => {
    return {
      params: {
        id: item.id.toString()
      }
    }
  });
  // above code returns an array with nested obj values that looks like this:
  // [
  //   {
  //     params: {
  //       id: 3
  //     }
  //   },
  //   {
  //     params: {
  //       id: 2
  //     }
  //   }
  // ]
}

// function returns names and ids for all json objects in array, sorted by name property
export function getSortedList() {
  // get filepath to json file
  const filePath = path.join(dataDir, 'persons.json');
  // load json file contents
  const jsonString = fs.readFileSync(filePath, 'utf8');
  // convert string from file into json array object
  const jsonObj = JSON.parse(jsonString);
  // sort json array by name property

  const filePath2 = path.join(dataDir, 'persons2.json');
  const jsonString2 = fs.readFileSync(filePath2, 'utf8');
  const jsonObj2 = JSON.parse(jsonString2);
  const allJsonObj = jsonObj.concat(jsonObj2);

  allJsonObj.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });

  // use map() on array to extract just id + name properties into new array of obj values
  return allJsonObj.map(item => {
    return {
      id: item.id.toString(),
      name: item.name
    }
  });
}

export async function getData(idRequested) {
  // get filepath to json file
  const filePath = path.join(dataDir, 'persons.json');
  // load json file contents
  const jsonString = fs.readFileSync(filePath, 'utf8');
  // convert string from file into json array object
  const jsonObj = JSON.parse(jsonString);
  // find object value in array that has matching id

  const filePath2 = path.join(dataDir, 'persons2.json');
  const jsonString2 = fs.readFileSync(filePath2, 'utf8');
  const jsonObj2 = JSON.parse(jsonString2);
  const allJsonObj = jsonObj.concat(jsonObj2);

  const objMatch = allJsonObj.filter(obj => {
    return obj.id.toString() === idRequested;
  });

  // extract object value in filtered array if any
  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];
  } else {
    objReturned = {};
  }
  // console.log(objReturned);

  // return object value found
  return objReturned;
}