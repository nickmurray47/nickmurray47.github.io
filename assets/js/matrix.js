
/*
 *  Matrix - Object constructor function
 *  @param _parentElement   -- HTML element in which to draw the visualization
 *  @param _data            -- Array with all stations of the bike-sharing network
 */

Matrix = function(_data) {

	this.data = _data;

	this.initVis();
}


/*
 *  Initialize matrix svg
 */

Matrix.prototype.initVis = function() {
	var vis = this;
  vis.width = 800;
  vis.height = 800;

  vis.margin = {top: 150, right: 20, bottom: 30, left: 200};

  vis.svg = d3.select("#florentine").append("svg")
      .attr("width", vis.width)
      .attr("height", vis.height);

      var grid = new Array();

      var rectWidth = 20;
      var rectHeight = 20;
      var spacing = rectWidth * 1.5;

      var val = "businessValues";

      var g;

      //draw the matrix
      for(var i = 0; i<vis.data.length; i++){

        grid.push(new Array());

        var g = vis.svg.append("g")

        var name = g.append("text")
          .attr("x", vis.margin.left/2)
          .attr("y", (vis.margin.top+12) + i*spacing)
          .text((vis.data[i].name))
          .attr("class", i);

        for(var c = 0; c < vis.data.length; c++){
          grid[i].push({
            row: i,
            column: c,
            business: vis.data[i].businessValues[c],
            marriage: vis.data[i].marriageValues[c],
            name: vis.data[i].name,
            x: vis.margin.left + i*spacing,
            y: vis.margin.top + spacing*c,
          });

              if(i == 0){
                var cName = vis.svg.append("g");
                var x1 = vis.margin.left + c*spacing;
                var y1 = (vis.margin.top/3);

                var top = cName.append("text")
                  .text((vis.data[c].name))
                  .attr("transform", function(d,i){
                    return 'translate(' + x1 + ', '+ y1 +') rotate(90)';
                  });
                }
        }


      //   var x = vis.margin.left+ i * spacing;
      //   var gName = vis.svg.append("g")
      //     //
      //   var name = gName.append("text")
      //     .attr("x", vis.margin.left/2)
      //     .attr("y", (vis.margin.top+12) + i*spacing)
      //     .text((vis.data[i].name))
      //
      //   var g = vis.svg.append("g")
      //     // .attr("class", function(d,i){
      //     //     return "" + vis.data[i].name;
      //     // })
      //
      //   for(var j = 0; j<vis.data.length; j++){
      //     //append top column names

      //     }
      //     var y = vis.margin.top + spacing*j;
      //
      //     g.append("rect")
      //       .attr("width", rectWidth)
      //       .attr("height", rectHeight)
      //       .attr("x", x)
      //       .attr("y", y)
      //       .style("fill", "lightgray")
      //       .attr("class", function(d,i){
      //           return "" + j;
      //       });
      //   }
      }

      var row = vis.svg.selectAll(".row")
      .data(grid)
      .enter().append("g")
      .attr("class", "row");

      var cellHeight = 20, cellWidth = 20, cellPadding = 30;

      var column = row.selectAll("rect")
        .data(function(d) {
          return d; })
        .enter().append("rect")
        .attr("class", function(d) { return d.column; })
        .attr("x", function(d) {
          return d.x; })
        .attr("y", function(d) { return d.y; })
        .attr("width", rectWidth)
        .attr("height", rectHeight)
        .style("fill", "lightgray")
        .style("stroke", "light");

     //  console.log(row);
     //
     // D3's enter, update, exit pattern

    var trianglePath = row.selectAll(".triangle-path")
         .data(function(d) {
           return d;});

     trianglePath
     .enter().append("path")
         .attr("class", "triangle-path")

      // trianglePath

     // trianglePath
     .attr("d", function(d, index) {

       // Shift the triangles on the x-axis (columns)
       var x = d.x;
       // All triangles of the same row have the same y-coordinates
       // Vertical shifting is already done by transforming the group elements
       var y = d.y;


      // else
      if(d.business == 1){

        var path = 'M ' + x +' '+ y + ' l ' + cellWidth + ' 0 l 0 ' + cellHeight + ' z';
        }
        return path;
       })
       .style("fill",
       function(d, index) {
         if(d.business == 1){
           return "orange";
         }
           if(d.marriage == 1){
             return "purple";
           }
       }
     );

     //marriage path

     var trianglePath = row.selectAll(".trianglepath")
          .data(function(d) {
            return d;});

      trianglePath
      .enter().append("path")
          .attr("class", "trianglepath")

      // trianglePath
      .attr("d", function(d, index) {

        // Shift the triangles on the x-axis (columns)
        var x = d.x;
        // All triangles of the same row have the same y-coordinates
        // Vertical shifting is already done by transforming the group elements
        var y = d.y;

         if(d.marriage == 1){
           var path = 'M ' + x +' '+ y + ' l 0 ' + cellWidth + ' l ' + cellHeight + ' 0 z';
         }
         return path;
        })
        .style("fill",
        function(d, index) {
            if(d.marriage == 1){
              return "purple";
            }
        }
      );



	vis.wrangleData();
};


/*
 *  Data wrangling
 */

Matrix.prototype.wrangleData = function() {
	var vis = this;

	// Currently no data wrangling/filtering needed
	// vis.displayData = vis.data;

	// Update the visualization
	vis.updateVis();

}


/*
 *  The drawing function
 */

Matrix.prototype.updateVis = function() {
	var vis = this;

  var value = "businessValues";


}
