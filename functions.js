/**
 * createArray: Aktualisiert das 3 dimensionales Array chartData ([Zeit], [Zeile], [Spalte])
 */

function updateArray(xmlDoc){
  let x = xmlDoc.getElementsByTagName('Measurement');
  let Tabelle = [];

  for (let i = 0; i < x.length; i++) {  //Zeile wird ausgelesen und in Array gespeichert
    let Zeile = [];
    Zeile.push(x[i].getAttributeNode('Type').nodeValue);
    if (x[i].getAttributeNode('Value') === null) {
      Zeile.push('-');
    } else {
      Zeile.push(x[i].getAttributeNode('Value').nodeValue);
    }
    Zeile.push(x[i].getAttributeNode('Unit').nodeValue);
    
    Tabelle.push(Zeile);   //Zeilenarray wird in neue Zeile der Tabelle gepusht
  }
  //Array wird auf 60 Messwerte begrenzt
  if(chartData.length > 59) {
    chartData.shift();
    chartData.push(Tabelle);
  } else {
    chartData.push(Tabelle);
  }
  //console.log(chartData);
} 

/**
 * drawTable: Erstellt Tabelle mit Array Werten
 */

function drawTable(){
  let table = '';
  for (let i = 0; i < 13; i++) {
    table += '<tr><td>' + 
    chartData[chartData.length - 1][i][0] + 
    '</td><td>' + 
    chartData[chartData.length - 1][i][1] +
    '</td><td>' + 
    chartData[chartData.length - 1][i][2] + 
    '</td></tr>';
  }
  document.getElementById("tableData").innerHTML = table;
}

/**
 * drawChart: Erstellt Diagramm mit Array Werten
 */
/*

function drawChart(argument){

}

*/