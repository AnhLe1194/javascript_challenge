// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!
function buildtable(UFO_data){
tbody.html("")
    UFO_data.forEach(function(data) {
        var row = tbody.append("tr");
        Object.entries(data).forEach(function([key, value]) {
            // console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
            });
        });

}
buildtable(tableData)

var button = d3.select("#filter-btn");
// select id, #: id
function runEnter(){
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue)
    var filteredData = tableData
    filteredData = filteredData.filter(data => data.datetime === inputValue);
    console.log(filteredData);
    buildtable(filteredData)
    
    var inputElement = d3.select("#city");
    var inputValue = inputElement.property("value");
    console.log(inputValue)
    var filteredData = tableData
    filteredData = filteredData.filter(data => data.city === inputValue);
    console.log(filteredData);
    buildtable(filteredData)

    var inputElement = d3.select("#state");
    var inputValue = inputElement.property("value");
    console.log(inputValue)
    var filteredData = tableData
    filteredData = filteredData.filter(data => data.state === inputValue);
    console.log(filteredData);
    buildtable(filteredData)

    var inputElement = d3.select("#country");
    var inputValue = inputElement.property("value");
    console.log(inputValue)
    var filteredData = tableData
    filteredData = filteredData.filter(data => data.country === inputValue);
    console.log(filteredData);
    buildtable(filteredData)

    var inputElement = d3.select("#shape");
    var inputValue = inputElement.property("value");
    console.log(inputValue)
    var filteredData = tableData
    filteredData = filteredData.filter(data => data.shape === inputValue);
    console.log(filteredData);
    buildtable(filteredData)

    var inputElement = d3.select("#durationMinutes");
    var inputValue = inputElement.property("value");
    console.log(inputValue)
    var filteredData = tableData
    filteredData = filteredData.filter(data => data.durationMinutes === inputValue);
    console.log(filteredData);
    buildtable(filteredData)

    var inputElement = d3.select("#comments");
    var inputValue = inputElement.property("value");
    console.log(inputValue)
    var filteredData = tableData
    filteredData = filteredData.filter(data => data.comments === inputValue);
    console.log(filteredData);
    buildtable(filteredData)
}
// value: property
button.on("click", runEnter);