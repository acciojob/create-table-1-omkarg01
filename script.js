const btn = document.querySelector('input');


function insert_Row() {
    //Write your code here
    //your JS code here. If required.
    var table = document.getElementById("sampleTable");
    var row = table.insertRow(0); // Add a row to the end of the table
    var rowCount = table.rows.length;
    console.log(rowCount);

    // Insert new cells (<td> elements)
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    // Add text to the new cells
    cell1.innerHTML = "New Cell1"
    cell2.innerHTML = "New Cell2"

    // title.value = "";
    // author.value = "";
    // isbn.value = "";
}
