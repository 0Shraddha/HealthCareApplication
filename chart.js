
anychart.onDocumentReady(function () {
  
    // add data
    var data = [
      ["SUN",0,0,0],
      ["MON", 0, 0, 0],
      ["TUES", 3, 4, 0],
      ["WED", 0, 7, 0],
      ["THURS", 6, 0, 0],
      ["FRI", 0, 0, 0],
      ["SAT", 0, 0, 0]
    ];
    
    // create a data set
    var dataSet = anychart.data.set(data);
  
    // map the data for all series
    var firstSeriesData = dataSet.mapAs({x: 0, value: 1});
    var secondSeriesData = dataSet.mapAs({x: 0, value: 2});
    // var thirdSeriesData = dataSet.mapAs({x: 0, value: 3});
  
    // create a line chart
    var chart = anychart.line();
  
    // create the series and name them
    var firstSeries = chart.line(firstSeriesData);
    firstSeries.name("Webinar Session");
    var secondSeries = chart.line(secondSeriesData);
    secondSeries.name("Upcoming appointments");
    // var thirdSeries = chart.line(thirdSeriesData);
    // thirdSeries.name("Novak Djokovic");
  
    // add a legend and customize it
    chart.legend().enabled(true).fontSize(14).padding([10, 0, 10, 0]);
    
    
    // name the axes
    chart.yAxis().title("Hours(AM/PM)");
    chart.xAxis().title("Week");
    
    // customize the series markers
    firstSeries.hovered().markers().type("circle").size(4);
    secondSeries.hovered().markers().type("circle").size(4);
    // thirdSeries.hovered().markers().type("circle").size(4);
    
    // turn on crosshairs and remove the y hair
    chart.crosshair().enabled(true).yStroke(null).yLabel(false);
    
    // change the tooltip position
    chart.tooltip().positionMode("point");
    chart.tooltip().position("right").anchor("left-center").offsetX(5).offsetY(5);
    
    // customize the series stroke in the normal state
    firstSeries.normal().stroke("#4D77FF", 2.5);
    secondSeries.normal().stroke("#EF4136", 2.5);
    // thirdSeries.normal().stroke("#43a7dc", 2.5);
    
    // specify where to display the chart
    chart.container("container");
    
    // draw the resulting chart
    chart.draw();
    
  });
  