const csvStringToArray = strData =>
{
    const objPattern = new RegExp(("(\\,|\\r?\\n|\\r|^)(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|([^\\,\\r\\n]*))"),"gi");
    let arrMatches = null, arrData = [[]];
    while (arrMatches = objPattern.exec(strData)){
        if (arrMatches[1].length && arrMatches[1] !== ",")arrData.push([]);
        arrData[arrData.length - 1].push(arrMatches[2] ?
            arrMatches[2].replace(new RegExp( "\"\"", "g" ), "\"") :
            arrMatches[3]);
    }
    return arrData;
}

const csvParse = strData =>
{
  const data = csvStringToArray(strData);
  let res = [];
  const topLine = data[0];
  for (let i = 1; i < data.length; i++) {
    if (data[i].length > 1) {
      let value = {};
      for (let j = 0; j < topLine.length; j++) {
        value[topLine[j]] = data[i][j];
      }
      res.push(value);
    }
  }
  return res;
}

export default csvParse;
