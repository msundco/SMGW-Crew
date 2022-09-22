/**
 * global vars 
 */

const source = 'http://192.168.102.181/measurements.xml';
let dataXML = []; 
let timeXML = []; 
let time = 0; 
const timespan = 15; 


/**  
 * main
 */

 let dataInit = []; 
 let labelInit = []; 
 
 for (let i = 0; i<timespan; i++){
     dataInit[i] = 0; 
     labelInit[i] = i; 
 }
 
let myChart = initChart(labelInit, dataInit);
setInterval(getData, 1000, source);

/** 
 * getData: Holt daten mit fetch!
*/
async function getData(source) {

    const response = await fetch(source);
    const responseText = await response.text();
    let parser = new DOMParser();
    let responseXML = parser.parseFromString(responseText, 'text/xml'); 
    //console.log(responseXML)
    
    let measurementArray = responseXML.getElementsByTagName('Measurement'); 
    //console.log(measurementArray);

    readXML(measurementArray); 
    createTable(dataXML);
    updateTable(dataXML);
    addChartData(myChart, time, dataXML[1][1]);
    shiftChartData(myChart); 
    time++; 
   
}