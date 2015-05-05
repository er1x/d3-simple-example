function init() {

  var data = [50, 75, 12];

  var svg = d3.select('#chart')
              .append('svg')
              .attr('width', 500)
              .attr('height', 200);

  var heroBars = svg.selectAll('rect')
     .data(data)
     .enter()
     .append('rect')
     .attr('height', 50)
     .attr('width', function(d){ return d;})
     .attr('y', function(d, index){ return index * 55; });
}

window.onload = init;
