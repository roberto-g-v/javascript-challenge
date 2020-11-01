/********************** APP ************************/

// Select from data.js
var tableData = data;

// Use filterButton
var filterButton = d3.select("#filter-btn");

// Select the table (#ufo-table)
var ufoTable = d3.select("#ufo-table");
var ufoTableBody = ufoTable.select("tbody");

// Create event handlers 
filterButton.on("click", runFilter);
ufoTableBody.on("submit", runFilter);

function loadTableFull() {

    for (let i = 0; i < tableData.length; i++) {
         
         ufoTableBody.append("tr");
         ufoTableBody.append("td").text(tableData[i].datetime);
         ufoTableBody.append("td").text(tableData[i].city);
         ufoTableBody.append("td").text(tableData[i].state);
         ufoTableBody.append("td").text(tableData[i].country);
         ufoTableBody.append("td").text(tableData[i].shape);
         ufoTableBody.append("td").text(tableData[i].durationMinutes);
         ufoTableBody.append("td").text(tableData[i].comments);
                 
     };
};

/********************** FUNCTION ************************/
// Run function
loadTableFull();


// Complete the event handler function for the form
function runFilter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    //console.log(inputValue);

    // Filter Data
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    //console.log(filteredData);

    // If search is empty pop alert messsage"
    if (filteredData.length === 0 ) {
        alert("Sorry, your search returned empty")
    };

    // Remove any error/child from list----
    ufoTableBody.html("");

    for (let event = 0; event < filteredData.length; event++) {
        
        ufoTableBody.append("tr")
        ufoTableBody.append("td").text(filteredData[event].datetime);
        ufoTableBody.append("td").text(filteredData[event].city);
        ufoTableBody.append("td").text(filteredData[event].state);
        ufoTableBody.append("td").text(filteredData[event].country);
        ufoTableBody.append("td").text(filteredData[event].shape);
        ufoTableBody.append("td").text(filteredData[event].durationMinutes);
        ufoTableBody.append("td").text(filteredData[event].comments);
                
    };
};