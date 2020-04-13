'use strict';

let chart = d3.select("#chart");
chart.append('svg')
    .append("circle")
    .attr("cx", 140)
    .attr("cy", 70)
    .attr("r", 40)
    .style("fill", "red");

var allData = [];

var marriages = [
    0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,
    0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,
    0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,
    0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,
    0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,
    0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,
    0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,
    1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,
    0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,
    0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,
    0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,
    0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0
];

var business = [
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,
    0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,
    0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,
    0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,
    0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,
    0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,
    0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,
    0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,
    0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0
];

loadData();

function loadData(){

    const url = `http://localhost:4000/assets/data/florentine-family-attributes.csv`;

    d3.csv(url, function(data) {
        // console.log(data);
        for(var i = 0; i<data.length; i++){
            var familyStat = {};
            familyStat["index"]= i;
            familyStat["name"] = data[i].Family;
            var index = i*16;
            familyStat["businessValues"] = business.slice(index, index+16);
            familyStat["marriageValues"] = marriages.slice(index, index+16);
            familyStat["businessCount"] = familyStat["businessValues"].filter(c => c === 1).length;
            familyStat["marriageCount"] = familyStat["marriageValues"].filter(c => c === 1).length;
            familyStat["wealth"] = parseInt(data[i].Wealth);
            familyStat["priorates"] = (data[i].Priorates == "NA") ? 0:parseInt(data[i].Priorates);
            allData.push(familyStat);
        }
        createVis();
    });
}

function createVis() {

    // TO-DO: INSTANTIATE VISUALIZATION
    console.log(allData);
    var m = new Matrix(allData);

}


