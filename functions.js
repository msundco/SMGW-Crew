/**
 * readXML: Ließt XML Dateien von fetch 
 */
/*
function readXML(array){

    let value = []; unit = []; type = []; 

    for (let i= 0; i<array.length; i++) {
        unit[i] = array[i].getAttributeNode('Unit').nodeValue; 
        type[i] = array[i].getAttributeNode('Type').nodeValue; 
        
        if (array[i].getAttributeNode['Value'] == null) {
            value[i] = ' '; 
        } else {
            value[i] = array[i].getAttribute('Value');
        }
        
       //value[i] = array[i].getAttribute('Value');
    } 

    dataXML = [type, value, unit]; 

}
*/
/**
 * createArray: Erstellt ein 3 dimensionales Array
 */

let array3Dim = [];

function createArray(xmlDoc){
  
  
  let x = xmlDoc.getElementsByTagName('Measurement');
  
  let Tabelle = [];
  for (let i = 0; i < x.length; i++) {
    let Spalte = [];
    
    Spalte.push(x[i].getAttributeNode('Type').nodeValue);
    if (x[i].getAttributeNode('Value') === null) {
      Spalte.push('');
    } else {
      Spalte.push(x[i].getAttributeNode('Value').nodeValue);
    }
    Spalte.push(x[i].getAttributeNode('Unit').nodeValue);
    
    Tabelle.push(Spalte);
  }


    if(array3Dim.length > 59) {
      array3Dim.shift();
      array3Dim.push(Tabelle);
    } else {
      array3Dim.push(Tabelle);
    }

  
  //console.log(array3Dim);
} 


/*
    table += '<tr><td>' + 
    x[i].getAttributeNode('Type').nodeValue + 
    '</td><td>'; 

    if (x[i].getAttributeNode('Value') === null) {
      table += '-';
    } else {
      table += x[i].getAttributeNode('Value').nodeValue;
    }

    table += '</td><td>' + 
    x[i].getAttributeNode('Unit').nodeValue + 
    '</td></tr>';
    */
    
  
  


/**
 * createTable: Erstellt Tabelle mit XML Werten 
 */
/*
function createTable(argument){
    let tableData = document.getElementById('tableData');
    for (let i = 0; i<argument[1].length; i++){
        let tr = document.createElement('tr'); 
        let td = document.createElement('td');
        let textNode = document.createTextNode(argument[1][i]); 
        td.append(textNode);
        tr.append(td); 
        tableData.append(tr);
    }

}
*/
/**
 * updateTable: Aktualisiert TabellenInhalte 
 */
/*
function updateTable(argument){

}
*/