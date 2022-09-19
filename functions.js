/**
 * readXML: Ließt XML Dateien von fetch 
 */

function readXML(array){

    let value = []; unit = []; type = []; 

    for (let i= 0; i<array.length; i++) {
        unit[i] = array[i].getAttribute('Unit'); 
        type[i] = array[i].getAttribute('Type'); 
        
        if (array[i].getAttributeNode['Value'] == null) {
            value[i] = ' '; 
        } else {
            value[i] = array[i].getAttribute('Value');
        }
        
       //value[i] = array[i].getAttribute('Value');
    } 

    dataXML = [type, value, unit]; 

}

/**
 * createTable: Erstellt Tabelle mit XML Werten 
 */

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

/**
 * updateTable: Aktualisiert TabellenInhalte 
 */

function updateTable(argument){

}