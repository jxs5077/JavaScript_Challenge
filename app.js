// from data.js

var button = d3.select("#filter-btn");

var tableData = data;

var tbody = d3.select("tbody");

function construct_table(selectedData) {
    tbody.html("");
    selectedData.forEach((one_row) => {
        var new_row = tbody.append('tr');
        Object.entries(one_row).forEach(([key, value]) => {
            new_row.append('td').text(value);
        });
    });
};

// construct_table(selectedData = tableData);

button.on("click", date_button);
function date_button() {  
    var user_date = d3.select('#datetime').property("value");
    var new_table = tableData;
    if (user_date){
        new_table = new_table.filter(row => row.datetime === user_date)
    } 
    construct_table(new_table)
}
