/**
 * functions.js: Definiert sämtliche Funktionen, die in script.js verwendet werden 
 */



/**
 * readXML: Ließt XML Dateien von fetch 
 */

function readXML(array){

    let value = []; unit = []; type = []; 

    for (let i= 0; i<array.length; i++) {
        unit[i] = array[i].getAttribute('Unit'); 
        type[i] = array[i].getAttribute('Type'); 
        
        if (array[i].getAttributeNode('Value') == null) {
            value[i] = '-'; 
        } else {
            value[i] = array[i].getAttribute('Value');
        }
        
       //value[i] = array[i].getAttribute('Value');
    } 

    dataXML = [type, value, unit];

/* timeXML 
    if (time<10) {
        timeXML[time] = [dataXML];  
        console.log(timeXML);
        time++;
    }
    else{
       timeXML.shift(); 
       timeXML.push(dataXML); 
       console.log(timeXML); 
    }
*/     
   
}

/**
 * createTable: Erstellt Tabelle mit XML Werten, argument ist ein 3-dimensionales Array 
 */
let createdTable = 0; 
function createTable(argument){
    if (createdTable == 0) {
        let tableData = document.getElementById('tableData');
        for (let i = 0; i<argument[1].length; i++){
            let tr = document.createElement('tr'); 
            for (let j = 0; j<argument.length; j++) {
                let td = document.createElement('td');
                let textNode = document.createTextNode(argument[j][i]);
                td.append(textNode);
                tr.append(td);
                tableData.append(tr);

                if (j == 1) {
                    td.setAttribute('id', argument[0][i]);
                }
            }    
        }
    }
    createdTable = 1; 
}

/**
 * updateTable: Aktualisiert TabellenInhalte, argument ist ein 3-dimensionales Array
 */

function updateTable(argument){

     
    for (let i = 0; i<argument[0].length; i++) {
        let tableData = document.getElementById(argument[0][i]);
        tableData.innerText = argument[1][i]; 
    } 

}
