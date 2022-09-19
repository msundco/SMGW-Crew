const source = 'http://192.168.102.181/measurements.xml';

/**  
 * main
 */
getData(source);

/** 
 * getData: Holt daten mit fetch!
*/
async function getData(source) {

    const response = await fetch(source);
    const responseText = await response.text();
    let parser = new DOMParser();
    let responseXML = parser.parseFromString(responseText, 'text/xml'); 
    console.log(responseXML)
    
    let measurementArray = responseXML.getElementsByTagName('Measurement'); 
    console.log(measurementArray);

}